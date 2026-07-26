'use client';

import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';

type AddToCartButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  label?: string;
};

export function AddToCartButton({
  label = 'Add to cart',
  disabled,
  ...props
}: AddToCartButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      className={`group/cart grid size-10 shrink-0 place-items-center rounded-full bg-gray-50 text-gray-900 transition-colors duration-200 hover:bg-primary focus-visible:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 group-hover/product:bg-primary`}
      {...props}
    >
      <span className="relative size-5">
        <Image
          src="/images/product/bag-dark.svg"
          alt=""
          fill
          className="opacity-100 transition-opacity group-hover/cart:opacity-0 group-focus-visible/cart:opacity-0 group-hover/product:opacity-0"
        />
        <Image
          src="/images/product/bag.svg"
          alt=""
          fill
          className="opacity-0 transition-opacity group-hover/cart:opacity-100 group-focus-visible/cart:opacity-100 group-hover/product:opacity-100"
        />
      </span>
    </button>
  );
}
