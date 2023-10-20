import React, { FormEventHandler, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`  
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  color: #FFFFFF;
  padding: .7rem 1.5rem;
  cursor: pointer;
  transition: background 1s;

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

export interface ButtonProps {
    id?: string | undefined,
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    className?: string | undefined,
    children: ReactNode,
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick: MouseEventHandler,
    onChange: FormEventHandler
}

const Button = ({
    id,
    autoFocus,
    className,
    children,
    disabled,
    type,
    onClick,
    onChange
}: ButtonProps) => {
    return (
        <StyledButton
            autoFocus={autoFocus}
            className={className}
            id={id}
            type={type}
            onChange={onChange}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );

};

export { Button };