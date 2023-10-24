import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const config = {
	dest: path.resolve(__dirname, '..', '..', 'tmp'),
	storage: multer.diskStorage({
		destination: (request, file, callback) => {
			callback(null, path.resolve(__dirname, '..', '..', 'tmp'));
		},
		filename: (request, file, callback) => {
			crypto.randomBytes(16, (error, hash) => {
				if (error) {
					callback(error, file.filename);
				}
				const fileName = `${hash.toString('hex')}-${file.originalname}`;

				callback(null, fileName);
			});
		},
	}),
	limits: {
		fileSize: 4 * 1024 * 1024,
	},
	fileFilter: (request, file, callback) => {
		const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'];

		if (allowedMimes.includes(file.mimetype)) {
			callback(null, true);
		} else {
			callback(new Error('Arquivo Inválido.'));
		}
	},
};

export { config };