import React, { FormEventHandler, MouseEventHandler } from 'react';

export interface ButtonProps {
    id?: string | undefined,
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    className?: string | undefined,
    children: Element,
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick: MouseEventHandler,
    onChange: FormEventHandler
}

export function Button({
    id,
    autoFocus,
    className,
    children,
    disabled,
    type,
    onClick,
    onChange
}: ButtonProps) {
    return (
        <button
            autoFocus={autoFocus}
            className={className}
            id={id}
            type={type}
            onChange={onChange}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
