import * as express from "express";
import Multer from "multer";
import storage from "./firebaseStorage";

export const upload = Multer({
  storage: Multer.memoryStorage(),
});

const uploadFile = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const bucket = storage.bucket();
  console.log(req.file);
  if (!req.file) {
    res.status(400).send("Nenhum arquivo enviado.");
    return;
  }

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  blobStream.on("error", (err) => {
    next(err);
  });

  blobStream.on("finish", () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).send(publicUrl);
  });

  console.log('enviou')
  blobStream.end(req.file.buffer);
};

export default uploadFile;
