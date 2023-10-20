import React, { FormEventHandler, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`  
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 1rem;
  color: #FFFFFF;
  padding: .7rem 1.5rem;
  cursor: pointer;

  &:focus-visible {
      outline: 2px solid #101820;
  }

  &:disabled {
      background-color: gray;
      color: #FFFFFF;
      border-color: gray;
  }

  &:hover:enabled {
      transition: ease .2s;
      background-color: #005281;
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