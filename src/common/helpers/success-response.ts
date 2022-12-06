export class SuccessResponse {
  static from(data: any = null, resultCode = 200, errorMessage = 'Success') {
    return {
      resultCode: resultCode,
      errorMessage: errorMessage,
      data,
    };
  }
}
