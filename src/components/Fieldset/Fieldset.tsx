import React, { ReactNode } from 'react';

export interface FieldsetProps {
  children?: ReactNode,
  disabled?: boolean | undefined;
  form?: string | undefined;
  name?: string | undefined;
  id?: string | undefined,
  className?: string | undefined,
}

export function Fieldset({
  id,
  className,
  form,
  name,
  children,
  disabled
}: FieldsetProps) {
  return (
    <fieldset
      id={id}
      className={className}
      form={form}
      name={name}
      disabled={disabled}
    >
      {children}
    </fieldset>
  );
};



