import React, { FormEventHandler, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: 5px solid blue;
  padding: 10px 20px;
  cursor: pointer;
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