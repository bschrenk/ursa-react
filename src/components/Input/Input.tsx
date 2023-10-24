import React, { ChangeEventHandler, MouseEventHandler, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`  
    display: flex;
    padding: 0.7rem;
    width: 100%;
    border: .12rem solid ${(props) => props.theme.fonts.color};;
    border-radius: ${(props) => props.theme.borderRadius};
    box-sizing: border-box;
    
    &:focus-visible {
        outline: .2rem solid ${(props) => props.theme.colors.primary};;
    }
`;

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

const Input = ({
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
}: InputProps) => {
  return (
    <StyledInput
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

Input.defaultProps = {
};

export { Input }

