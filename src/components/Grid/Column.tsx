import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex: 1;
`;

export interface ColumnProps {
  children: ReactNode,
}

// Define Drawer component
const Column = ({
  children,
}: ColumnProps) => {
  return (
    <StyledColumn>
      {children}
    </StyledColumn>
  );
};

Column.defaultProps = {
};

export {Column};