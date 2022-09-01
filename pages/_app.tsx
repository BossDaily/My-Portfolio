import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Flowbite } from "flowbite-react";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { customtheme as theme } from "./theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Flowbite theme={{ theme }}>
      <Component {...pageProps} />
    </Flowbite>
  );
}

export default MyApp;
