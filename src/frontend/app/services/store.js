import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authFormReducer from "../components/form/auth-form/logic";

export const store = configureStore({
    reducer: {
        authForm:  authFormReducer,
    },
    middleware: () => [thunk]
})