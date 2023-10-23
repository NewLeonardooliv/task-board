import { Request, Response } from 'express';
import { Controller } from '../Controller';


export const adapterRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
      try {
          const requestData = {
              ...request.body,
              ...request.params,
              ...request.query,
              ...request
          };

          const file = request.file;

          const httpResponse = await controller.handle(requestData, file);

          if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
              return response.status(httpResponse.statusCode).json(httpResponse.body);
          }

          return response.status(httpResponse.statusCode).json({
              error: httpResponse.body.error
          });
      } catch (err) {
          return response.status(500).json({
              error: err.message
          });
      }
  };
};
