export interface LoginApiResponseModel {
  response: ResponseModelOfLoginApi;
  server: number;
}
export interface ResponseModelOfLoginApi {
  success: boolean;
  role: string;
}
