import React, { ReactNode } from 'react';
import styled from 'styled-components';


// Secondary Box shadow Gray
// box-shadow: var(--p-card-shadow, 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15));

const StyledCard = styled.div`  
    display: flex;
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

Card.defaultProps = {
};

export { Card };