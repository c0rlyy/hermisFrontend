import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { FormFields, RegisterFormValidationError } from "../components/types";
import { handleRegister } from "../features/auth/authHandlers";
import useFormState from "../hooks/useFormState";
import { CustomApiError, RegisterPayload } from "../features/types";
import { useState } from "react";
import LoginHeader from "../components/LandingHeader";

function SignUp() {
  const navigate = useNavigate();
  const { formState, handleChange } = useFormState({
    email: "",
    password: "",
    username: "",
    repeatPassword: "",
  });
  const [registerErr, setRegisterErr] = useState<RegisterFormValidationError>({
    general: "",
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
  });
  // im done with shit typesciprt
  const formFields: FormFields = [
    { name: "email", label: "email", type: "email" },
    { name: "username", label: "username", type: "text" },
    { name: "password", label: "password", type: "password" },
    { name: "repeatPassword", label: "repeat Password", type: "password" },
  ] as FormFields;

  const payloadData = {
    email: formState.email,
    password: formState.password,
    username: formState.username,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setRegisterErr({
      general: "",
      email: "",
      password: "",
      repeatPassword: "",
      username: "",
    });

    e.preventDefault();
    if (formState.password !== formState.repeatPassword) {
      setRegisterErr((prev) => ({
        ...prev,
        repeatPassword: "passwords must match",
      }));
      return;
    }
     
    try {
      const response = await handleRegister(payloadData);
      console.log(response);
      navigate("/home");
    } catch (error) {
      if (error instanceof CustomApiError) {
        if (error.code >= 500) {
          setRegisterErr((prev) => ({
            ...prev,
            general: "Server internal Error, sorry for inconvince",
          }));
        } else {
          setRegisterErr((prev) => ({
            ...prev,
            general: error.info.error,
          }));
        }
      } else {
        setRegisterErr((prev) => ({
          ...prev,
          general: "Ops, something went wrong. Please try again later.",
        }));
      }
    }
  };

  return (
    <>
      <LoginHeader></LoginHeader>
      <div className="max-w-lg sm:max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg ">
        <AuthForm<RegisterPayload>
          formFields={formFields}
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          payloadData={payloadData}
          submitLabel="Sign up"
          errorObj={registerErr}
        />
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="mt-2 inline-block text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            Login instead
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
