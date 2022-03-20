import React, { ChangeEventHandler, MouseEventHandler, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  alt?: string | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  disabled?: boolean | undefined;
  id?: string | undefined;
  onChange?: ChangeEventHandler;
  onClick?: MouseEventHandler;
}

export function Input({
  id,
  disabled,
  alt,
  name,
  placeholder,
  readOnly,
  required,
  autoComplete,
  type,
  value,
  onClick,
  onChange,
}: InputProps) {
  return (
    <input
      value={value}
      type={type}
      alt={alt}
      placeholder={placeholder}
      id={id}
      autoComplete={autoComplete}
      required={required}
      name={name}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
      readOnly={readOnly}
    />
  );
};



