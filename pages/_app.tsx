import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Flowbite } from "flowbite-react";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Flowbite
      theme={{
        theme: {
          tab: {
            tablist: {
              styles: {
                pills:
                  "flex-wrap text-sm font-helvetica text-white dark:text-gray-400",
              },
              tabitem: {
                styles: {
                  pills: {
                    active: {
                      on: "rounded-lg bg-Medium-Purple font-helvetica text-white",
                      off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
                    },
                  },
                },
              },
            },
          },
        },
      }}
    >
      <Component {...pageProps} />
    </Flowbite>
  );
}

export default MyApp;
