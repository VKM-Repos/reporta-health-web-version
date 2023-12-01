/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { backendApiURL } from "@config/index";
import { useUserCredentialsStore } from "@store/authStore.store";

const instanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000,
};
// let jwt = useUserCredentialsStore.getState()?.userDetails?.accessToken;
let jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ2NGNjMjJhYTQ1NTU0NjFjZGM4ZTczM2YxMWQ0MDc0YTExZDM1ZGMyMGU3YjMzMGFiMzk0MmFkNzAyMGNjZjE4MDk0ZjNmYjI0NGQ1YTZkIn0.eyJhdWQiOiIxIiwianRpIjoiZDY0Y2MyMmFhNDU1NTQ2MWNkYzhlNzMzZjExZDQwNzRhMTFkMzVkYzIwZTdiMzMwYWIzOTQyYWQ3MDIwY2NmMTgwOTRmM2ZiMjQ0ZDVhNmQiLCJpYXQiOjE3MDE0MzM2OTIsIm5iZiI6MTcwMTQzMzY5MiwiZXhwIjoxNzMzMDU2MDkyLCJzdWIiOiIxMDUyIiwic2NvcGVzIjpbXX0.bgiqUqo9orKzxfwy5or_XBUvO9uqJZteHpFqtu9I481Om8FllbMvtdtCUyKqr29IxXHtyD3ko4r2zZKnrzMUnmL5Nn9wGqurXjGCr1Ez4B3UCPtOtiPVsuGwc486H1BPt9k-F_MUBndOTAy24bpgP_Qo3M6U3DFzkayk866attwszOJI7hX8iByCSqSIXQGqsFI448R1a9CQmO3FBSpLHqCc-3Ai70wPM1AZuPzeItH7UhkEP-hYmgXWa8Qsfkwc5-rEGbR2oKLc_nefGJ025OvGuiC7JLMt8WKuEXJCCAj3aZ8sEUo8T74aoyCNagpetxnVCPVSGQxJacqRwX1H28vwK-O7XvdppeZ0lPg5AI_WD4j1jo2nBHblROxyLrm4nGcAVUyjacDTEIRSG7gPBjg7AB-V3rMP-eqjgpztH7uNgAs_XKrQVgMFhvuLl3lLAe_mZ_jHEfiwe1rnOT5sik6BSk6p0yBrR9N6mUzw30yZpDGcVUOUaw2gdFzSgTXQ5eO-r-Ie9wDuOD9lac0a3yc1iV0SlMZEi5-k3a42bym9tKBkOER-SytbipATzoeaYGlphz1w1_v-u73zvTQtqgvCY4I54bcFZU2tV0iMOXwBe6_Z_t_x4B-h39IhCFmU72QSwH9k4YncXLBvrxhWJuyHZiyGuAz2qeT6M3lTQKo";

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
