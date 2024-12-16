import { AuthFormProps } from "./types";
import {
  AuthFormPayload,
} from "../features/types";

export function AuthForm<T extends AuthFormPayload>({
  formFields,
  formState,
  handleChange,
  errorMessage,
  submitLabel,
  handleSubmit,
}: AuthFormProps<T>) {
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={String(field.name)}>
          <label htmlFor={String(field.name)}>{field.label}:</label>
          <input
            id={String(field.name)}
            name={String(field.name)}
            type={field.type}
            value={formState[field.name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <button type="submit">{submitLabel}</button>
      {errorMessage && <h1>{errorMessage}</h1>}
    </form>
  );
}

export default AuthForm;
