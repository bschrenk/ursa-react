import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  width: 100%;
`;

export interface GridProps {
  children: ReactNode,
}

// Define Drawer component
const Grid = ({
  children,
}: GridProps) => {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  );
};

Grid.defaultProps = {
};

export { Grid };