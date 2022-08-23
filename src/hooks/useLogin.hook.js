import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import Router from "next/router";
import { useUserCredentialsStore } from "@store/authStore.store";
import shallow from "zustand/shallow";
import { loginData } from "@services/mutation/login.service";

export const useLogin = () => {
  const [populateUserInfoAndJwt] = useUserCredentialsStore(
    (state) => [state.populateUserInfoAndJwt],
    shallow
  );

  const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
    mutationKey: LOGIN_MUTATION_KEY,
    mutationFn: loginData,
    onSuccess: (returnedData) => {
      populateUserInfoAndJwt(returnedData?.data);
      data = returnedData?.data;
      // add toast here
      console.log(returnedData?.data);
      Router.replace("/");
    },
    onError: () => {
      // add error toast
      return console.log("An error occured");
    },
  });

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
    reset,
    data,
  };
};
