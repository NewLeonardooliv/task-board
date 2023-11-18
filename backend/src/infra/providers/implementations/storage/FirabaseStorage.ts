import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';
import { IStorageProvider } from '../../IStorageProvider';
import { serviceAccount } from '@config/firebase.config';
import firebaseConfig from '@config/firebaseConfig';
import { config } from '@config/upload';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: firebaseConfig.storageBucket,
});

class FirebaseStorageProvider implements IStorageProvider {
  private bucket: any;

  constructor() {
    this.bucket = admin.storage().bucket();
  }

  async save(file: string, folder: string): Promise<string> {
    const filePath = path.join(config.dest, file);
    const fileBuffer = fs.readFileSync(filePath);
    const contentType = this.getContentType(fileBuffer);

    const fileUploadOptions: any = {
      metadata: {
        contentType: contentType,
      },
    };

    const uploadResponse = await this.bucket.upload(filePath, fileUploadOptions);

    const publicUrl = await uploadResponse[0].getSignedUrl({
      action: 'read',
      expires: '01-01-2100',
    });

    return publicUrl[0];
  }


  private getContentType(fileBuffer: Buffer) {
    const uint = new Uint8Array(fileBuffer.slice(0, 4));

    if (uint[0] === 0xFF && uint[1] === 0xD8 && uint[2] === 0xFF) {
      return 'image/jpeg';
    } else if (uint[0] === 0x89 && uint[1] === 0x50 && uint[2] === 0x4E && uint[3] === 0x47) {
      return 'image/png';
    } else if (uint[0] === 0x47 && uint[1] === 0x49 && uint[2] === 0x46 && uint[3] === 0x38) {
      return 'image/gif';
    } else if (uint[0] === 0x42 && uint[1] === 0x4D) {
      return 'image/bmp';
    } else {
      return 'application/octet-stream';
    }
  }

  async delete(file: string, folder: string): Promise<void> {
    const filePath = path.join(folder, file);

    await this.bucket.file(filePath).delete();
  }
}

export { FirebaseStorageProvider };
