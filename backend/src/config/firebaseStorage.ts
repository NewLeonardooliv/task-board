import * as admin from "firebase-admin";
import firebaseConfig from "./firebaseConfig";
import { serviceAccount } from "./firebase.config";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: firebaseConfig.storageBucket,
});

const storage = admin.storage();
export default storage;
