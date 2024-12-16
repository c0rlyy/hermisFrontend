import { AuthFormPayload, FormFieldsState } from "../features/types";

export type FormField = {
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
  errorMessage?: string;
  submitLabel: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}
