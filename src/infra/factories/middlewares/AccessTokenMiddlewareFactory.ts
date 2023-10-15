import TokenMiddleware from "@infra/middlewares/token-middleware";

const accessTokenMiddleware = new TokenMiddleware();

export { accessTokenMiddleware };