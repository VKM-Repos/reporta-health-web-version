import shallow from "zustand/shallow";
import { useUserCredentialsStore } from "@store/authStore.store";

import Router from "next/router";

export const useLogoutUser = () => {
  const { reset } = useUserCredentialsStore(
    (state) => ({
      reset: state.reset,
    }),
    shallow
  );

  const logoutHandler = () => {
    reset();
    Router.replace("/");
  };

  return {
    logoutHandler,
  };
};
