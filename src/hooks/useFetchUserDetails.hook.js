import { useQuery } from "react-query";
import { useUserCredentialsStore } from "@store/authStore.store";
import { fetchUserDetails } from "@services/query/userDetails.service";
import { USER_QUERY_KEY } from "@config/queryKeys";
import shallow from "zustand/shallow";

export const useFetchUserDetails = () => {
  const { isAuthenticated, userDetails } = useUserCredentialsStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      userDetails: state.userDetails,
    }),
    shallow
  );

  const { data, isLoading, error, isFetching } = useQuery(
    USER_QUERY_KEY,
    fetchUserDetails,
    {
      enabled: isAuthenticated,
      retry: 1,
      initialData: userDetails,
    }
  );

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
