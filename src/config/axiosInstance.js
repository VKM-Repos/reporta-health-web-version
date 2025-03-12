/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { backendApiURL } from "@config/index";
import { useUserCredentialsStore } from "@store/authStore.store";

const instanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000,
};
// let jwt = useUserCredentialsStore.getState()?.userDetails?.accessToken;
let jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVkOTMxODE5OGFiMzFmZWE4MzU3YjdkMTBlYWNiYTI0Nzc0MTI4ZWVlMjY4MjFmNzg4ZTdmZTI4YTFmNGViOTU3YTk5YzQ2NTM1ZDM2OTFhIn0.eyJhdWQiOiIxIiwianRpIjoiZWQ5MzE4MTk4YWIzMWZlYTgzNTdiN2QxMGVhY2JhMjQ3NzQxMjhlZWUyNjgyMWY3ODhlN2ZlMjhhMWY0ZWI5NTdhOTljNDY1MzVkMzY5MWEiLCJpYXQiOjE3NDE3OTExMTksIm5iZiI6MTc0MTc5MTExOSwiZXhwIjoxNzczMzI3MTE5LCJzdWIiOiIxMDc2Iiwic2NvcGVzIjpbXX0.ubjSTUm3iH5Sxyw73rf53ttZ9EqLFtZkrM0hoLRf3TOGGMp1TUmz1ViIUgurznnxVb1A1_MHXtSz6urhRNVKhsjt7s5Ch9emaMutqRWpi0Isb7g5rdiKZPzyEw2fNPMGJ9M2Gz1SqK74DOi__mV71ivCadC-lLIuI4O8uLC6ZZ8HwCraGCbk4s9Yrng0hEGCqalKUbYMfivqdVqM8wl8HwO-usmeTchbLWk0kz9p37d5VzGA4c3t8F8j5AUCjLbEiHaIqFIG-KrTIbsjRQXxUmGnzejcjX98tSScFRNP7Swc2y_BaTqb_G1N_FtsvRGDA-lNnKTnGudGAYHgN2Yr48POCFmLXn4H0BizvtEwE4faOS-sL77SZVi_6RYjyvuQgJMR-6-FYELx79NmeKED_KHOPk2mExq-NynQ-NmY5ywSLrERY_8kIbGp7fFgZP9S4zXFUDjUhhzzUjx5btt22kGmGx3ApEq32nxxvRHb1bQ1iK4R5QbLwYy-fRlx-lbSw7CUvC5f9UV9AL2IbHaOjYS-qpxdw0FXAHKcneHI6wYgoOPssJLW8MeP0QzJlKsybTKp1db6uH7LUX0KI-_Nq_uhSbMmEi0GUwwabRVuxZ23gqFe08PVSfd6AFvYy1WrxUjVEex7UzZ4Fvmedv_FTLUITt2xq17YP6dawfdVzQs";

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
