import React from 'react';
import { useFieldArray, useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const schema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  mobile: z.string().length(10, 'mobile must be 10 digits zod'),
});

type UserForm = z.infer<typeof schema>;

const App: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<UserForm>({
    mode: 'onSubmit', // only show error after submit form
    criteriaMode: 'firstError', // show first or all errors at once
    reValidateMode: 'onChange', // once submit the form once, then trigger validation onChange or onSubmit
    delayError: 1000, // a delay to show error. Better user experience.
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: UserForm) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors) => {
    console.log('Errors:', errors);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        autoComplete="off" // disable autocomplete
        noValidate // disable html default validation
        className="flex w-80 flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label>
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            placeholder="add your name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            {...register('name')}
          />
        </label>
        <label>
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            placeholder="add your mobile"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            {...register('email')}
          />
        </label>
        <label>
          <span className="text-gray-700">Mobile</span>
          <input
            type="text"
            placeholder="add your mobile"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            {...register('mobile')}
          />
          {formState.errors.mobile && (
            <span className="text-red-500">
              {formState.errors.mobile.message}
            </span>
          )}
        </label>
        <button
          type="submit"
          className="rounded bg-indigo-400 py-2 text-white"
          disabled={formState.isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
