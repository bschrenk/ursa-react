import React, { FormEventHandler, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  padding: .5rem 2rem;
  
  &:not(:last-child){
    box-shadow: 0 .06rem 0 0 ${(props) => props.theme.colors.primary};
  }
`;

export interface ListItemProps {
    disabled?: boolean,
    children?: ReactNode,
    onClick?: MouseEventHandler,
    onChange?: FormEventHandler
}

const ListItem: React.FC<ListItemProps> = ({
    disabled,
    children,
    onClick,
    onChange
}: ListItemProps) => {
    return (
        <StyledListItem
            onChange={onChange}
            onClick={onClick}
            aria-disabled={disabled}
            role='listitem'
        >
            {children}
        </StyledListItem>
    );
};

ListItem.defaultProps = {
};

export { ListItem };