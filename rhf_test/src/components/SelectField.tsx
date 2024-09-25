import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type SelectFieldProps = JSX.IntrinsicElements['select'] & {
  label?: string;
  options: Array<{ value: string | number; label: string }>;
  errorText?: string;
};

const SelectField: React.FC<SelectFieldProps> = forwardRef(function SelectField(
  { className, label, options, errorText, ...restProps }: SelectFieldProps,
  ref,
) {
  return (
    <label className={twMerge(clsx('inline-block'), className)}>
      {label !== undefined && (
        <span className="text-sm text-gray-500">{label}</span>
      )}
      <select
        {...restProps}
        ref={ref}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorText !== undefined && <p className="text-red-500">{errorText}</p>}
    </label>
  );
});

export default React.memo(SelectField);
