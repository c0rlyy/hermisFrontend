import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { FormFields } from "../components/types";
import { handleRegister } from "../features/auth/authHandlers";
import useFormState from "../hooks/useFormState";
import { CustomApiError, RegisterPayload } from "../features/types";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const { formState, handleChange } = useFormState({
    email: "",
    password: "",
    username: "",
    repeatPassword: "",
  });
  const [registerErr, setRegisterErr] = useState("");
  // im done with shit typesciprt
  const formFields: FormFields = [
    { name: "email", label: "email", type: "email" },
    { name: "username", label: "username", type: "text" },
    { name: "password", label: "password", type: "password" },
    { name: "repeatPassword", label: "repeatPassword", type: "password" },
  ] as FormFields;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.password !== formState.repeatPassword) {
      setRegisterErr("passwords must match try again");
      return;
    }

    try {
      const response = await handleRegister(formState);
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

  const payloadData = {
    email: formState.email,
    password: formState.password,
    username: formState.username,
  };

  return (
    <>
      <AuthForm<RegisterPayload>
        formFields={formFields}
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        payloadData={payloadData}
        submitLabel="sign up"
        errorMessage={registerErr}
      ></AuthForm>
      <Link to={"/"}>Login instead</Link>
    </>
  );
}

export default SignUp;
