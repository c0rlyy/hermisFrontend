import {
  ApiError,
  CustomApiError,
  LoginPayload,
  LoginRes,
  RegisterPayload,
  RegisterRes,
} from "../types";

export const handleRegister = async ({
  username,
  email,
  password,
}: RegisterPayload): Promise<RegisterRes> => {
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("username", username);

  const response = await fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: formData.toString(),
  });

  if (!response.ok) {
    const errorData: ApiError = await response.json();
    const err = new CustomApiError<ApiError>(
      "error while fetching events",
      errorData,
      response.status
    );
    throw err;
  }

  const data: RegisterRes = await response.json();
  return data;
};

export const handlerLogin = async ({
  email,
  password,
}: LoginPayload): Promise<LoginRes> => {
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  const response = await fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: formData.toString(),
  });

  if (!response.ok) {
    const errorData: ApiError = await response.json();
    const err = new CustomApiError<ApiError>(
      "error while fetching events",
      errorData,
      response.status
    );
    throw err;
  }

  const data: LoginRes = await response.json();
  return data;
};

export type FetchMethods = "GET" | "PUT" | "DELETE" | "PATCH" | "POST";

// export const apiFetchHandler = async (
//   method: FetchMethods,
//   payload = null,
//   headers = null
// ): Promise<void> => {
//   const response = await fetch("http://localhost:8080/api/register", {
//     method: method,
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     const errorData: ApiError = await response.json();
//     const err = new CustomApiError<ApiError>(
//       "error while fetching events",
//       errorData,
//       response.status
//     );
//     throw err;
//   }

//   const data = await response.json();
//   return data;
// };
