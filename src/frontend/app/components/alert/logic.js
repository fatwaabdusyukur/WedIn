import { createSlice } from "@reduxjs/toolkit";
import types from "./types.json";

export function getType(type) {
    switch (type) {
      case "danger":
        return types.danger;
      case "success":
        return types.success;
      case "warning":
        return types.warning;
      default:
        return types.info;
    }
}

const alertSlice = createSlice({
  name: "alert",
  initialState: { status: false, type: "", message: "" },
  reducers: {
    openAlert: (state, { payload }) => {
      state.status = true;
      state.type = payload.type;
      state.message = payload.message;
    },
    closeAlert: (state) => {
      state.status = false;
      state.message = "";
      state.type = "";
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;