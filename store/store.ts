import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "./modules";

const debugMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend
      // correctly typed middlewares can just be used
      // additionalMiddleware,
      // you can also type middlewares manually
      // untypedMiddleware as Middleware<
      //   (action: Action<'specialAction'>) => number,
      //   RootState
      // >
      ()
      // prepend and concat calls can be chained
      .concat(logger),
});

const makeStore: MakeStore<{}> = () => store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<{}>(makeStore, { debug: debugMode });
export default store
