import { AuthFormPayload, FormFieldsState } from "../features/types";

type FormField = {
  name: keyof FormFieldsState;
  type: string;
  label: string;
};

export type FormFields = FormField[];

export interface AuthFormProps<T extends AuthFormPayload> {
  formFields: FormFields;
  payloadData: T;
  formState: FormFieldsState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorObj: FormValidationError;
  submitLabel: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

interface FormValidationError {
  general: string;
}

export interface LoginFormValidationError extends FormValidationError {
  password: string;
  email: string;
}

export interface RegisterFormValidationError extends FormValidationError {
  password: string;
  email: string;
  username: string;
  repeatPassword: string;
}
