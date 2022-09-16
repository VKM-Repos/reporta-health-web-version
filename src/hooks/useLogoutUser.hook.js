import shallow from "zustand/shallow";

import { useUserCredentialsStore } from "@store/authStore.store";
import { useEffect, useState } from "react";

export const useLogoutUser = () => {
  const [userData, setUserData] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
     setUserData(useUserCredentialsStore.getState().userDetails);
    setIsAuthenticated(useUserCredentialsStore.getState().isAuthenticated);
  }, []);

  const { reset } = useUserCredentialsStore(
    (state) => ({
      reset: state.reset,
    }),
    shallow
  );

  const logoutHandler = () => {
    reset();
    setUserData({});
    setIsAuthenticated(!isAuthenticated)
    window.location.replace("/")
  };

  return {
    logoutHandler,
  };
};
