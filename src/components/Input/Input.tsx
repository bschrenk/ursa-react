import React, { ChangeEventHandler, MouseEventHandler, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input<{ hasButton?: boolean }>`
    display: inline-flex;
    padding: 0.7rem;
    width: 100%;
    border: .12rem solid ${(props) => props.theme.fonts.color};
    border-radius: ${(props) =>
      props.hasButton
        ? `${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`
        : props.theme.borderRadius};
    box-sizing: border-box;
    
    &:focus-visible {
        outline: .2rem solid ${(props) => props.theme.colors.primary};
    }
    &:disabled {
      background-color: #CECECE;
      color:  ${(props) => props.theme.fonts.color};
      cursor: default;
    }
`;

const StyledButton = styled.button`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${(props) => props.theme.colors.primary};
  position: absolute;
  padding: 0.7rem;
  border: .12rem solid ${(props) => props.theme.fonts.color};
  border-left: none;
  cursor: pointer;
  color: #FFFFFF;
  transition: background 1s;
  border-radius: 0 ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius} 0;

  &:focus-visible {
    outline: 2px solid #101820;
  }

  &:disabled {
      background-color: gray;
      color: #FFFFFF;
      border-color: gray;
  }

  &:hover:enabled {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${(props) => props.theme.colors.primary};
  }
`;


export interface InputProps {
  title: string;
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
  button?: string;
}

const Input = ({
  title,
  alt,
  autoComplete,
  autoFocus,
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
  button,
}: InputProps) => {
  return (
    <StyledInputContainer>
      <StyledInput
        title={title}
        alt={alt}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
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
        hasButton={!!button}
      />
      {button && <StyledButton>{button}</StyledButton>}
    </StyledInputContainer>
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
};

export { Input };