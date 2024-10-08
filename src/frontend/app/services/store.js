import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authFormReducer from "../components/form/auth-form/logic";
import alertReducer from "../components/alert/logic";

export const store = configureStore({
    reducer: {
        authForm:  authFormReducer,
        alert: alertReducer
    },
    middleware: () => [thunk]
})