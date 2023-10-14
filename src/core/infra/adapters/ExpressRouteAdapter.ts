import { Request, Response } from 'express';


export const adapterRoute = (controller: any) => {
	return async (request: Request, response: Response) => {
		const requestData = {
			...request.body,
			...request.params,
			...request.query,
			...request,
		};

		const httpResponse = await controller(requestData);

		if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
			return response.status(httpResponse.statusCode).json(httpResponse.body);
		} else {
			return response.status(httpResponse.statusCode).json({
				error: httpResponse.body.error,
			});
		}
	};
};
