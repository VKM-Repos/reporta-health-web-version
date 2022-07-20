import { createContext, useState } from "react";
import { QueryClientProvider } from "react-query";
import "@styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { useQueryClientAndsettings } from "@config/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";
import {FormProvider} from "../context/StepperContext"


function MyApp({ Component, pageProps }) {


  const { queryClient } = useQueryClientAndsettings();
  return (
    
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
