import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type InputProps = JSX.IntrinsicElements['input'] & {
  label?: string;
  helperText?: string;
  errorText?: string;
};

const InputField: React.FC<InputProps> = forwardRef(function TextField(
  {
    className,
    label,
    helperText,
    errorText,
    disabled,
    type = 'text',
    ...restPros
  }: InputProps,
  ref,
) {
  return (
    <label className={twMerge(clsx('inline-block'), className)}>
      {label !== undefined && (
        <span className="text-sm text-gray-500">{label}</span>
      )}
      <input
        type={type}
        className={clsx(
          'mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          {
            'bg-gray-300 text-zinc-500': disabled,
          },
        )}
        disabled={disabled}
        ref={ref}
        {...restPros}
      />
      {helperText !== undefined && helperText !== '' && (
        <p className="text-slate-400">{helperText}</p>
      )}
      {errorText !== undefined && errorText !== '' && (
        <p className="text-red-500">{errorText}</p>
      )}
    </label>
  );
});

export default React.memo(InputField);
