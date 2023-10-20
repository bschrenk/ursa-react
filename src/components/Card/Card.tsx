import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`  
    box-shadow: 0px 0px 0.03rem 0.12rem ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: #FFFFFF;
    padding: 1rem;
    min-height: 3rem;
    min-width: 3rem;
`;

export interface CardProps {
    id?: string | undefined,
    children: ReactNode
}

const Card = ({
    id,
    children
}: CardProps) => {
    return (
        <StyledCard id={id}>
            {children}
        </StyledCard>
    );

};

export { Card };