/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
export const ReduxProvider = ({ children }) => {
  return (<Provider store={store}>
    {children}
    </Provider>);
};
