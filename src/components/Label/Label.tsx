import React, { ReactNode } from 'react';

export interface LabelProps {
    htmlFor: string,
    id: string,
    className: string,
    children: ReactNode,
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
