export type AuthFormPayload = RegisterPayload | LoginPayload;
export type FormFieldsState = RegisterFormState | LoginFormState;
export type AuthFormRes = RegisterRes | LoginRes

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterRes {
  id: string;
  username: string;
  token: string;
}
export interface LoginRes {
  token: string;
}

export interface ApiError {
  error: string;
}

export class CustomApiError<T> extends Error {
  info: T;
  code: number;

  constructor(message: string, info: T, code: number) {
    super(message);
    this.name = "CustomApiError";
    this.info = info;
    this.code = code;
  }
}

export interface RegisterFormState {
  email: string;
  password: string;
  repeatPassword: string;
  username: string;
}

export interface LoginFormState {
  email: string;
  password: string;
}
