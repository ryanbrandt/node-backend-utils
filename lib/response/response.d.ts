declare class Response {
    static basic(code: number, message: string): {
        isBase64Encoded: boolean;
        statusCode: number;
        headers: {
            "Access-Control-Allow-Origin": string;
            "Access-Control-Allow-Credentials": boolean;
        };
        body: string;
    };
    static withPayload(code: number, data: object): {
        isBase64Encoded: boolean;
        statusCode: number;
        headers: {
            "Access-Control-Allow-Origin": string;
            "Access-Control-Allow-Credentials": boolean;
        };
        body: string;
    };
}
export default Response;
