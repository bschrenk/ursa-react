import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`  
    display: flex;
    margin: 0.5rem 0;
`;

export interface LabelProps {
    htmlFor?: string,
    id?: string,
    className?: string,
    children: ReactNode,
}

const Label = ({
    htmlFor,
    id,
    className,
    children
}: LabelProps) => {
    return (
        <StyledLabel id={id} className={className} htmlFor={htmlFor}>
            {children}
        </StyledLabel>
    );
};

export { Label }
