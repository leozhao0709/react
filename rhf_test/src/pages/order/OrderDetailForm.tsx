import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import {
  useFieldArray,
  useFormContext,
  useFormState,
  useWatch,
} from 'react-hook-form';
import SelectField from '../../components/SelectField';
import { getFoodItems } from '../../data';
import InputField from '../../components/InputField';

type OrderDetailFormProps = JSX.IntrinsicElements['div'];

export const orderDetailSchema = z.object({
  items: z
    .array(
      z.object({
        foodId: z.number().refine((v) => ![0].includes(v), {
          message: 'Please select a food',
        }),
        price: z.number(),
        quantity: z.number().min(0, 'Quantity must be at least 0'),
        totalPrice: z.number(),
      }),
    )
    .min(1, 'Need at least one item'),
});

export type OrderDetailFormType = z.infer<typeof orderDetailSchema>;

const OrderDetailForm: React.FC<OrderDetailFormProps> = ({
  className,
}: OrderDetailFormProps) => {
  const { register, setValue, getValues, control } =
    useFormContext<OrderDetailFormType>();

  const { fields, append, remove } = useFieldArray<OrderDetailFormType>({
    name: 'items',
  });

  const { errors } = useFormState<OrderDetailFormType>({
    name: ['items'],
    // exact: false // do not use exact here as we are going to match all the items related field like items.0.foodId, items.0.quantity etc...
  });

  const watchItems = useWatch({
    control,
    name: 'items',
  }); // trigger re-render if the watching key get updates (This is async). We need this to dynamic update related fields

  const onSelectFood = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    const selectedFoodId = parseInt(e.target.value);
    const price = getFoodItems().find(
      (food) => food.foodId === selectedFoodId,
    )?.price;
    setValue(`items.${index}.price`, price ?? 0);
    setValue(`items.${index}.quantity`, 1);
    updateRowTotalPrice(index);
  };

  const updateRowTotalPrice = (index: number) => {
    const { quantity, price } = getValues(`items.${index}`); // this is sync, we should use this instead of watchItems as watchItems is async(update in next render) and not working here.
    setValue(`items.${index}.totalPrice`, quantity * price);
  };

  const updateQuantity = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const quantity = parseInt(e.target.value);
    setValue(`items.${index}.quantity`, quantity);
    updateRowTotalPrice(index);
  };

  const onAppendRow = () => {
    append({ foodId: 0, quantity: 0, price: 0, totalPrice: 0 });
  };

  const onRemoveRow = (index: number) => {
    remove(index);
  };

  return (
    <div className={twMerge(clsx('mt-8'), className)}>
      <h2 className="mb-2 text-2xl font-bold">Order details</h2>

      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Food</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={field.id} className="align-top">
              <td>
                <SelectField
                  className="w-full"
                  options={[
                    ...[{ label: '', value: 0 }],
                    ...getFoodItems().map((v) => ({
                      label: v.name,
                      value: v.foodId,
                    })),
                  ]}
                  {...register(`items.${index}.foodId`, {
                    valueAsNumber: true,
                  })}
                  onChange={(e) => onSelectFood(e, index)}
                  errorText={errors.items?.[index]?.foodId?.message}
                />
              </td>
              <td>
                <div className="flex min-h-12 items-center justify-center">
                  {/* we must use getValues here! otherwise, append or remove row may not work */}
                  {getValues(`items.${index}.price`)}
                </div>
              </td>
              <td>
                <InputField
                  type="number"
                  className="w-full"
                  // min={1}
                  {...register(`items.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                  errorText={errors.items?.[index]?.quantity?.message}
                  onChange={(e) => updateQuantity(e, index)}
                />
              </td>
              <td>
                <div className="flex min-h-12 items-center justify-center">
                  {/* we must use getValues here! otherwise, append or remove row may not work */}
                  {getValues(`items.${index}.totalPrice`)}
                </div>
              </td>
              <td>
                <div className="mt-2 flex flex-grow flex-col items-center space-y-2">
                  <button
                    type="button"
                    className="block rounded bg-green-500 px-4 py-1 text-white transition hover:bg-green-600"
                    onClick={onAppendRow}
                  >
                    +
                  </button>
                  {fields.length > 1 && (
                    <button
                      type="button"
                      className="block rounded bg-red-500 px-4 py-1 text-white transition hover:bg-red-600"
                      onClick={() => onRemoveRow(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(OrderDetailForm);
