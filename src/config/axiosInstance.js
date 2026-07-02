import axios from "axios";
import { backendApiURL } from "@config/index";
import { useUserCredentialsStore } from "@store/authStore.store";

const DEFAULT_ERROR_MESSAGE = "Something went wrong, try again";
const INTERNAL_SERVER_ERROR = "An internal server error occurred";

const instanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000, // 5 minutes
};

function extractErrorMessage(response) {
  return (
    response?.data?.message?.[0]?.messages?.[0]?.message ||
    response?.data?.message
  );
}

/**
 * Axios response error formatter.
 */
function formatResponseError(error) {
  let message =
    extractErrorMessage(error?.response) ||
    error?.message ||
    DEFAULT_ERROR_MESSAGE;

  if (message === INTERNAL_SERVER_ERROR) {
    message = DEFAULT_ERROR_MESSAGE;
  }

  // Preserve the original Axios error object
  error.message = message;

  return Promise.reject(error);
}

// Axios instances
const authInstanceAxios = axios.create(instanceSettings);
const publicInstanceAxios = axios.create(instanceSettings);

// Authenticated requests
authInstanceAxios.interceptors.request.use(
  (config) => {
    const token =
      useUserCredentialsStore.getState()?.userDetails?.access;

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptors
publicInstanceAxios.interceptors.response.use(
  (response) => response,
  formatResponseError
);

authInstanceAxios.interceptors.response.use(
  (response) => response,
  formatResponseError
);

export { publicInstanceAxios, authInstanceAxios };