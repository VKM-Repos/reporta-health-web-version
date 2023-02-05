import { QueryClientProvider } from "react-query";
import NProgress from "nprogress";
import "@styles/nprogress.css";
import "@styles/globals.css"
import Router from "next/router";
import { Hydrate } from "react-query/hydration";
import { useQueryClientAndsettings } from "@config/queryClient";
// import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";
import { FormProvider } from "@context/StepperContext";
import dynamic from "next/dynamic";
import SidebarProvider from "@context/sidebarContext";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MapContextProvider = dynamic(() => import("@context/mapContext"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {

  const { queryClient } = useQueryClientAndsettings();
  return (
    <QueryClientProvider client={queryClient}>

      <Hydrate state={pageProps.dehydratedState}>
        <MapContextProvider>
          <SidebarProvider>
            <FormProvider>
              <Component {...pageProps} />
            </FormProvider>
          </SidebarProvider>
        </MapContextProvider>
      </Hydrate>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
