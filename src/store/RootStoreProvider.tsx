"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";

export default function RootStoreProvider({ children }: React.PropsWithChildren<object>) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}