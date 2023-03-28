/* eslint-disable camelcase */
import { HttpStatusCode } from "axios";

export interface BajajTokenResponse {
    response: any;
    code: HttpStatusCode;
    detail: string;
    data: string;
}

export interface TokenGenerationCommand {
    app_key: string;
    app_secret: string;
}

export interface TokenVerificationCommand {
    access_token: string;
}
