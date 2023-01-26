/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { backendApiURL } from "@config/index";
import { useUserCredentialsStore } from "@store/authStore.store";

const instanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000,
};
// let jwt = useUserCredentialsStore.getState()?.userDetails?.accessToken;
let jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIyMzliMzc4MWEwYzhmMjQzYjAzZWQ3ZGNjZDcwOWMxYTMzZjI0MzU1NDI2MWNhODYwNDM3ZWEwODIwOWQ0NzZmZTcxODNmYTAxZjNhZDliIn0.eyJhdWQiOiIxIiwianRpIjoiMjIzOWIzNzgxYTBjOGYyNDNiMDNlZDdkY2NkNzA5YzFhMzNmMjQzNTU0MjYxY2E4NjA0MzdlYTA4MjA5ZDQ3NmZlNzE4M2ZhMDFmM2FkOWIiLCJpYXQiOjE2NjY2MDY2MjQsIm5iZiI6MTY2NjYwNjYyNCwiZXhwIjoxNjk4MTQyNjI0LCJzdWIiOiIxMDUyIiwic2NvcGVzIjpbXX0.FJQJmrlVlbFWPAV9SJFSjJREvhTmb1ymEZTnNzEHSYcyyYPFNoJw23Tp3YQ_J9pT2urND3gkSekmJTxHUjggKl8YM80zJg8OKCpP4FvtJSQ10PUK4s6sGIYlBQk0GERwTIo-0auAdudHJJdd2sbTJz-tjQchRZMrd4m2N_EqqYIKBQN0t06LlCNuTjF8WBZwKOTGS1afxImgNF5KCwlXpt6AHrnL_nYu2FhNhkfKgYDQGmFYjHhi6T1atyq7IN8-CkE5Ee_bKXEHGzFzhsVPjYgSEeeZayIRtlaeL8LnTiqj-k-74B_3faKjOxsHzMSdDCm7EO7pU1xsnt2X7Ikt1u3-t11ZkYSWkkQTJ-EPO37opL_nT6AjzKZBAsfJWXg99qc3uFQKzeOlsCbSXRbuFYXeCKfN4_jtFmqAL4zw7IFMnYYjW2NNyosYppaqcrGOpRIj-wB8eA3A-9vjZqAI3qEX3eTcciCGPMeFBcrX57e4FQfHCUvFb8PtSTSkGRcU8IP2D2aYV75MESjeaDnDcSGRZhnJxPvwLBcJFqlpo3p6J2vr3B-bV7ankAQagwRmjjyyVjqK8XULyhhvV9okbIFmR_hylK6KZW4-95bR5axHYPLd12b3Rvox05t4xB-BsQKRRVjPU6CDiX48PXMfuIepeBzFwa6sgS64-wEHHyI";

function formatResponseError({ response, ...rest }) {
  let formatedError = {
    message:
      response?.data?.message === "An internal server error occurred"
        ? "Something went wrong, try again"
        : response?.data?.message?.[0]?.messages?.[0]?.message ===
          "An internal server error occurred"
          ? "Something went wrong, try again"
          : response?.data?.message?.[0]?.messages?.[0]?.message ||
          response?.data?.message ||
          "Something went wrong, try again",
    ...rest,
  };
  return Promise.reject(formatedError);
}

let authInstanceAxios = axios.create({
  ...instanceSettings,
  // headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
  headers: { Authorization: `Bearer ${jwt}` }
});
let publicInstanceAxios = axios.create({
  ...instanceSettings,
  // headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
  headers: { Authorization: `Bearer ${jwt}` }
});

// let publicInstanceAxios = axios.create(instanceSettings);

publicInstanceAxios.interceptors.response.use(null, formatResponseError);
authInstanceAxios.interceptors.response.use(null, formatResponseError);
authInstanceAxios.interceptors.request.use(null, formatResponseError);

export { publicInstanceAxios, authInstanceAxios };
