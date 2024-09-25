import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { FormProvider, useForm, type FieldErrors } from 'react-hook-form';
import ContactForm, { contactFormSchema } from './ContactForm';
import OrderDetailForm, { orderDetailSchema } from './OrderDetailForm';

const orderFormSchema = z
  .object({})
  .merge(contactFormSchema)
  .merge(orderDetailSchema);

type OrderFormType = z.infer<typeof orderFormSchema>;

type OrderPageProps = JSX.IntrinsicElements['div'];

const OrderPage: React.FC<OrderPageProps> = ({ className }: OrderPageProps) => {
  const methods = useForm<OrderFormType>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      orderNo: 1709273335612,
      items: [{ foodId: 0, quantity: 0, price: 0, totalPrice: 0 }],
    },
  });

  const { handleSubmit, formState } = methods;

  const onSubmit = (data: OrderFormType) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors) => {
    console.log('Errors:', errors);
  };

  return (
    <div className={twMerge(clsx('w-full'), className)}>
      <form
        autoComplete="off" // disable autocomplete
        noValidate // disable html default validation
        className="flex w-full flex-col"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <FormProvider {...methods}>
          <ContactForm />
          <OrderDetailForm />
        </FormProvider>

        <button
          type="submit"
          className="mt-8 self-center rounded bg-indigo-400 px-8 py-2 text-white transition hover:bg-indigo-500"
          disabled={formState.isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default React.memo(OrderPage);
