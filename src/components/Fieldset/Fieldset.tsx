import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`  
  display: flex;
  width: 100%;
  flex-direction: column;
  border: none;
`;

export interface FieldsetProps {
  children?: ReactNode,
  disabled?: boolean | undefined;
  form?: string | undefined;
  name?: string | undefined;
  id?: string | undefined,
  className?: string | undefined,
}

const Fieldset = ({
  id,
  className,
  form,
  name,
  children,
  disabled
}: FieldsetProps) => {
  return (
    <StyledFieldset
      id={id}
      className={className}
      form={form}
      name={name}
      disabled={disabled}
    >
      {children}
    </StyledFieldset>
  );
};

Fieldset.defaultProps = {
};

export { Fieldset }