import React from 'react';

export interface ButtonProps {
    id: string,
    className: string,
    children: Element,
    disabled: boolean,
    onClick: Function,
    onChange: Function
}

export function Button({
    id,
    className,
    children,
    disabled,
    onClick,
    onChange
}: ButtonProps) {
    return (
        <button 
            className={className}
            id={id}
            onChange={() => { onChange }}
            onClick={() => { onClick }}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
