import React from 'react';

export interface LabelProps {
    htmlFor: string,
    id: string,
    className: string,
    children: Element,
}

export function Label({
    htmlFor,
    id,
    className,
    children
}: LabelProps) {
    return (
        <label id={id} className={className} htmlFor={htmlFor}>{children}</label>
    );
};
