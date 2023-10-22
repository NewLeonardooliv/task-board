import { Request, Response, NextFunction } from 'express';
import { Middleware } from '../Middleware';


export const adapterMiddleware = (middleware: Middleware) => {
	return async (request: Request, response: Response, next: NextFunction) => {
		const requestData = {
			accessToken: request.headers?.['x-access-token'],
			...(request.headers || {}),
			...(request.query || {}),
		};

		const httpResponse = await middleware.handler(requestData, request.body);

		if (httpResponse === false) {
			return response.status(200).send();
		}

		if (httpResponse.statusCode === 200) {
			Object.assign(request, httpResponse.body);

			return next();
		} else {
			return response.status(httpResponse.statusCode).json({
				error: httpResponse.body.error,
			});
		}
	};
};
