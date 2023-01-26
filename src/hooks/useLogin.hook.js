import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
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
      return returnedData;
    },
    onError: () => {
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
