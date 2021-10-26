import reset from "../src/styles/reset";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Global styles={reset} />
    </div>
  );
}
export default wrapper.withRedux(MyApp);
