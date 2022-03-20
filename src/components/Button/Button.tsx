import React from 'react';

export interface ButtonProps {
    id: string,
    children: Element,
    disabled: boolean,
    onClick: Function,
    onChange: Function
}

export function Button({
    id,
    children,
    disabled,
    onClick,
    onChange
}: ButtonProps) {
    return (
        <button
            id={id}
            onChange={() => { onChange }}
            onClick={() => { onClick }}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
