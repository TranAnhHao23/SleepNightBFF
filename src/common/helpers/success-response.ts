export class SuccessResponse {
  static from (data: any = null, resultCode: number = 200, errorMessage: string = 'Success') {
    return {
      resultCode: resultCode,
      errorMessage: errorMessage,
      data,
    }
  }
}
