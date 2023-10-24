import React, { ChangeEventHandler, MouseEventHandler, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`  
    display: flex;
    padding: 0.7rem;
    width: 100%;
    border: .12rem solid ${(props) => props.theme.fonts.color};
    border-radius: ${(props) => props.theme.borderRadius};
    box-sizing: border-box;
    
    &:focus-visible {
        outline: .2rem solid ${(props) => props.theme.colors.primary};;
    }
    &:disabled {
      background-color: #CECECE;
      color:  ${(props) => props.theme.fonts.color};
      cursor: default;
    }
`;

export interface InputProps {
  alt?: string | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  id?: string | undefined;
  name?: string | undefined;
  onChange?: ChangeEventHandler;
  onClick?: MouseEventHandler;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  type: HTMLInputTypeAttribute;
  value?: string | ReadonlyArray<string> | number | undefined;
}

const Input = ({
  alt,
  autoComplete,
  disabled,
  id,
  name,
  onChange,
  onClick,
  placeholder,
  readOnly,
  required,
  type,
  value,
}: InputProps) => {
  return (
    <StyledInput
      alt={alt}
      autoComplete={autoComplete}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type={type}
      value={value}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false
};

export { Input }

