import React from "react";
import { QueryClient } from "react-query";

export const useQueryClientAndsettings = () => {
  const queryClientSettings = {
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnMount: "false",
        refetchOnWindowFocus: "true",
        refetchOnReconnect: "always",
        cacheTime: 3.6e6,
        refetchInterval: 3.6e6, //1 hour
        refetchIntervalInBackground: true,
        suspense: false,
        staleTime: 3.6e6,
      },
      mutations: {
        retry: 2,
      },
    },
  };

  const [queryClient] = React.useState(new QueryClient(queryClientSettings));

  return { queryClient };
};
