import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import TextFields from '../../components/InputField';
import { useFormContext, useFormState } from 'react-hook-form';
import { z } from 'zod';

type ContactFormProps = JSX.IntrinsicElements['div'];

export const contactFormSchema = z.object({
  orderNo: z.number(),
  mobile: z.string().length(10, 'mobile must be 10 digits zod'),
  name: z.string().min(1),
  email: z.string().email(),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC<ContactFormProps> = ({
  className,
}: ContactFormProps) => {
  const { register } = useFormContext<ContactFormType>();

  const { errors } = useFormState<ContactFormType>({
    name: ['orderNo', 'mobile', 'name', 'email'],
    exact: true,
  });

  return (
    <div className={twMerge(clsx(''), className)}>
      <h2 className="mb-2 text-2xl font-bold">Contact details</h2>
      <div className="-mx-4 flex flex-wrap">
        <TextFields
          className="w-1/2 px-4"
          label="#Order No."
          {...register('orderNo')}
          disabled
          errorText={errors.orderNo?.message}
        />
        <TextFields
          className="w-1/2 px-4"
          label="Mobile"
          {...register('mobile')}
          errorText={errors.mobile?.message}
        />
        <TextFields
          className="w-1/2 px-4"
          label="Customer Name"
          {...register('name')}
          errorText={errors.name?.message}
        />
        <TextFields
          className="w-1/2 px-4"
          label="Email"
          {...register('email')}
          errorText={errors.email?.message}
        />
      </div>
    </div>
  );
};

export default React.memo(ContactForm);
