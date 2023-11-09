import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Define the ButtonGroupProps interface
export interface ButtonGroupProps {
  id?: string | undefined;
  children: ReactNode;
}

const StyledButtonGroup = styled.div`
  display: inline-flex;

  > :not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  > :not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const ButtonGroup = ({ id, children }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup id={id}>
      {children}
    </StyledButtonGroup>
  );
};

ButtonGroup.defaultProps = {
};

export { ButtonGroup };