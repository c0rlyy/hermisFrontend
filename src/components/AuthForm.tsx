import { AuthFormProps } from "./types";
import { AuthFormPayload } from "../features/types";

export function AuthForm<T extends AuthFormPayload>({
  formFields,
  formState,
  handleChange,
  errorObj,
  submitLabel,
  handleSubmit,
}: AuthFormProps<T>) {
  return (
    <form onSubmit={handleSubmit} className="">
      {formFields.map((field) => (
        <div key={String(field.name)} className="mb-4">
          <label
            htmlFor={String(field.name)}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}:
          </label>
          <input
            id={String(field.name)}
            name={String(field.name)}
            type={field.type}
            value={formState[field.name]}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errorObj[field.name] && (
            <p className="mt-4 text-red-600 text-center text-md">{errorObj[field.name]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {submitLabel}
      </button>

      {errorObj.general && (
        <h1 className="mt-4 text-red-600 text-center text-md">
          {errorObj.general}
        </h1>
      )}
    </form>
  );
}

export default AuthForm;
