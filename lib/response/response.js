"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    static basic(code, message) {
        const response = {
            isBase64Encoded: false,
            statusCode: code,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
                message: message,
            }),
        };
        return response;
    }
    static withPayload(code, data) {
        const response = {
            isBase64Encoded: false,
            statusCode: code,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(data),
        };
        return response;
    }
}
exports.default = Response;
//# sourceMappingURL=response.js.map