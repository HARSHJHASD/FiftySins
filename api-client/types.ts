import { HttpStatusCode } from 'axios';

interface Detail {
    loc: [string, number];
    msg: string;
    type: string;
}
export interface CommonResponse {
    code: HttpStatusCode;
    detail: string | Detail[];
}
