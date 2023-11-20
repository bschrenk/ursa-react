import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 0.3rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ListItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  inputTitle: string;
  buttonText?: string;
  inputPlaceholder?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  inputTitle,
  buttonText,
  inputPlaceholder
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <Input placeholder={inputPlaceholder} title={inputTitle} value={selectedValue} onClick={handleToggle} button={buttonText} />
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <ListItem key={option.value} onClick={() => handleSelect(option.value)}>
            {option.label}
          </ListItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export { Dropdown, DropdownProps };