class Response {
  static basic(code: number, message: string) {
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

  static withPayload(code: number, data: object) {
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

export default Response;
