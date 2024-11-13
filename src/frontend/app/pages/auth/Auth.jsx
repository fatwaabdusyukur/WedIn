import React, { useEffect } from "react";
import AuthForm from "../../components/form/auth-form/AuthForm";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCsrf } from "../../components/form/auth-form/logic";

export default function Auth() {
  const csrfToken = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(setCsrf(csrfToken));
  }, [dispatch])

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
