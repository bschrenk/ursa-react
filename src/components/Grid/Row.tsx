import React, { ReactNode } from 'react';
import styled from 'styled-components';

// const ViewportSizeType = ['xs', 'sm', 'md', 'lg', 'xl'];
// const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const StyledRow = styled.div`
box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    gap: 0.5rem;
`;

export interface RowProps {
  children: ReactNode,
}

// Define Drawer component
const Row = ({
  children,
}: RowProps) => {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  );
};

Row.defaultProps = {
};

export {Row};