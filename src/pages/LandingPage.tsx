import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { FormFields } from "../components/types";
import { handlerLogin } from "../features/auth/authHandlers";
import useFormState from "../hooks/useFormState";
import { Link, useNavigate } from "react-router-dom";
import { CustomApiError, LoginPayload } from "../features/types";

function LandingPage() {
  const navigate = useNavigate();
  const { formState, handleChange } = useFormState({
    email: "",
    password: "",
  });
  const [registerErr, setRegisterErr] = useState("");

  const formFields: FormFields = [
    { name: "email", type: "email", label: "email" },
    { name: "password", type: "password", label: "password" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await handlerLogin(formState);
      console.log(response.token);
      navigate("/home");
    } catch (error) {
      if (error instanceof CustomApiError) {
        if (error.code >= 500) {
          setRegisterErr("Server Error Sorry for the inconvenience");
        } else {
          setRegisterErr(error.info.error);
        }
      } else {
        setRegisterErr("Oops, something went wrong. Please try again later.");
      }
    }
  };
  return (
    <>
      <AuthForm<LoginPayload>
        formFields={formFields}
        formState={formState}
        handleChange={handleChange}
        payloadData={formState}
        submitLabel="sign in"
        errorMessage={registerErr}
        handleSubmit={handleSubmit}
      ></AuthForm>
      <h1>or</h1>
      <h1>dont have an account?</h1>
      <Link to={"/signup"}> Sign Up</Link>
    </>
  );
}

export default LandingPage;
