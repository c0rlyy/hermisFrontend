import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { FormFields, LoginFormValidationError } from "../components/types";
import { handlerLogin } from "../features/auth/authHandlers";
import useFormState from "../hooks/useFormState";
import { Link, useNavigate } from "react-router-dom";
import { CustomApiError, LoginPayload } from "../features/types";
import { useAuth } from "../context/AuthContext";
import LoginHeader from "../components/LandingHeader";

function LandingPage() {
  const navigate = useNavigate();
  const { isLoggedIn,setIsLoggedIn } = useAuth();
  if (isLoggedIn){
    navigate("/home")
  }
  const { formState, handleChange } = useFormState({
    email: "",
    password: "",
  });

  const [registerErr, setRegisterErr] = useState<LoginFormValidationError>({
    general: "",
    email: "",
    password: "",
  });

  const formFields: FormFields = [
    { name: "email", type: "email", label: "email" },
    { name: "password", type: "password", label: "password" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    setRegisterErr({ general: "", email: "", password: "" });
    e.preventDefault();
    try {
      const response = await handlerLogin(formState);
      if (response) {
        setIsLoggedIn(true)
        navigate("/home");
      }
    } catch (error) {
      if (error instanceof CustomApiError) {
        if (error.code >= 500) {
          setRegisterErr((prev) => ({
            ...prev,
            general: "Server Error Sorry for the inconvenience",
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
          general: "Oops, something went wrong. Please try again later.",
        }));
      }
    }
  };

  return (
    <>
      <LoginHeader></LoginHeader>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <AuthForm<LoginPayload>
          formFields={formFields}
          formState={formState}
          handleChange={handleChange}
          payloadData={formState}
          submitLabel="Sign in"
          errorObj={registerErr}
          handleSubmit={handleSubmit}
        />
        <div className="mt-6 text-center">
          <h1 className="text-sm sm:text-base font-medium text-gray-700">or</h1>
          <h1 className="text-sm sm:text-base font-medium text-gray-700">
            Don't have an account?
          </h1>
          <Link
            to="/signup"
            className="mt-2 inline-block text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
