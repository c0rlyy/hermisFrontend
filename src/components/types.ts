import { AuthFormPayload, FormFieldsState } from "../features/types";

type FormField = {
  name: keyof FormFieldsState;
  type: string;
  label: string;
};

export type FormFields = FormField[];

export interface AuthFormProps<
  T extends AuthFormPayload,
  S extends FormValidationError
> {
  formFields: FormFields;
  payloadData: T;
  formState: FormFieldsState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorObj: S;
  submitLabel: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export interface FormValidationError {
  [key: string]: string | undefined;
}

export interface LoginFormValidationError extends FormValidationError {
  general: string;
  password: string;
  email: string;
}

export interface RegisterFormValidationError extends FormValidationError {
  general: string;
  password: string;
  email: string;
  username: string;
  repeatPassword: string;
}

export type DateKey = string;

export type ArrowWeekAction = "next" | "previous";
export interface HandleArrowWeekChange {
  (action: ArrowWeekAction): void;
}
