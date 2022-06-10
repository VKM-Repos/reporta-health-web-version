import axios from "axios";
import { backendApiURL } from "@config/index";

const BackendInstanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000,
};

let token = "tokenkey";

// function formatResponseError({ response, ...rest }) {
//   let formatedError = {
//     message:
//       response?.data?.message === "An internal server error occurred"
//         ? "Something went wrong, try again"
//         : response?.data?.message?.[0]?.messages?.[0]?.message ===
//           "An internal server error occurred"
//         ? "Something went wrong, try again"
//         : response?.data?.message?.[0]?.messages?.[0]?.message ||
//           response?.data?.message ||
//           "Something went wrong, try again",
//     ...rest,
//   };
//   return Promise.reject(formatedError);
// }

let authBackendInstanceAxios = axios.create({
  ...BackendInstanceSettings,
  headers: { Authorization: `Bearer ${token}` },
});

// publicInstanceAxios.interceptors.response.use(null, formatResponseError);
// authInstanceAxios.interceptors.response.use(null, formatResponseError);

export { authBackendInstanceAxios };
