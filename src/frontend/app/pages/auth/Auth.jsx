import React from "react";
import AuthForm from "../../components/form/auth-form/AuthForm";

export default function Auth() {
  return (
    <div className="p-5 sm:p-10 bg-slate-100 w-full h-screen">
      <div
        className="bg-cover rounded-md h-full flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/img/banner/login.png')" }}
      >
        <AuthForm />
      </div>
    </div>
  );
}
