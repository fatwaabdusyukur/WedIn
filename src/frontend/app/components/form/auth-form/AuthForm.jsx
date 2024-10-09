import React, { useState } from "react";
import AuthSwitch from "../../switch/auth-switch/AuthSwitch";
import TextInput from '../../input/text/TextInput';
import { useDispatch, useSelector } from "react-redux";
import { submitForm, updateField } from "./logic";

const AttributeInput = {
  email: { id: "email", label: "Email", type: "email" },
  username: { id: "username", label: "Username", type: "text" },
  pw:  { id: "pw", label: "Password", type: "password" },
  pwConfirm: { id: "pwConfirm", label: "Confirm Password", type: "password" },
  uname:  { id: "uname", label: "Username", type: "text" },
  pwd: { id: "pwd", label: "Password", type: "password" },
}

export default function AuthForm() {
  const { page, valid } = useSelector(state => state.authForm);
  const dispatch = useDispatch();

  return (
    <div className="relative w-72 sm:w-96 bg-white rounded bg-cover p-3 mx-4 sm:mx-0">
      <AuthSwitch />
      <div className="mt-7 flex flex-col gap-y-7">
        {page ? (
          <>
            <TextInput attribute={AttributeInput.email} valid={valid.email} onHandleChange={(value) => dispatch(updateField({ field: 'register-email', value }))} />
            <TextInput attribute={AttributeInput.username} valid={valid.username} onHandleChange={(value) => dispatch(updateField({ field: 'register-username', value }))} />
            <div className="flex w-full justify-evenly items-start gap-2">
              <TextInput attribute={AttributeInput.pw} valid={valid.password} onHandleChange={(value) => dispatch(updateField({ field: 'register-password', value }))} />
              <TextInput attribute={AttributeInput.pwConfirm} valid={valid.confirmPassword} onHandleChange={(value) => dispatch(updateField({ field: 'register-confirmPassword', value }))} />
            </div>
            <button onClick={() => dispatch(submitForm('register'))} className="mt-3 rounded bg-blue-300 hover:bg-blue-400 text-white font-bold font-nunito p-2 w-3/4 mx-auto">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <TextInput attribute={AttributeInput.uname} valid={valid.username} onHandleChange={(value) => dispatch(updateField({ field: 'login-username', value }))} />
            <TextInput attribute={AttributeInput.pwd} valid={valid.password} onHandleChange={(value) => dispatch(updateField({ field: 'login-password', value }))} />
            <button onClick={() => dispatch(submitForm('login'))} className="mt-3 rounded bg-blue-300 hover:bg-blue-400 text-white font-bold font-nunito p-2 w-3/4 mx-auto">
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
