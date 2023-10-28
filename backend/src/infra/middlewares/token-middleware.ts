import jwt from "jsonwebtoken";
import { auth } from "@config/auth";
import { Middleware } from "@core/infra/Middleware";
import { HttpResponse, ok, unauthorized } from "@core/infra/HttpResponse";

type TokenMiddlewareRequest = {
  authorization: string;
};

class TokenMiddleware implements Middleware {
  async handler({
    authorization,
  }: TokenMiddlewareRequest): Promise<HttpResponse> {
    if (!authorization) {
      return this.createUnauthorizedResponse("Invalid Token");
    }

    const token = this.extractToken(authorization);

    try {
      const user = await this.verifyToken(token);

      return this.createSuccessResponse(user);
    } catch (error) {
      return this.createUnauthorizedResponse("Invalid Token");
    }
  }

  private extractToken(authorizationHeader: string): string {
    return authorizationHeader.slice(7);
  }

  private async verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, auth.secretKey, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
    });
  }

  private createUnauthorizedResponse(message: string): HttpResponse {
    return unauthorized({
      name: "Unauthorized",
      message: message,
    });
  }

  private createSuccessResponse(user: any): HttpResponse {
    return ok({ user: user });
  }
}

export default TokenMiddleware;
