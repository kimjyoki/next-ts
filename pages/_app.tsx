"use strict";

import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "../src/components/common/Layout";
import { wrapper } from "../store/store";

import "antd/dist/antd.css";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <Provider store={store}>
      <div>Valid MyApp type.</div>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(MyApp);
