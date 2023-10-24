import React, { FormEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';

const StyledList = styled.ul`  
    list-style: none;
`;

export interface ListProps {
    items: string[];
    onClick?: MouseEventHandler,
    onChange?: FormEventHandler
}

const List = ({
    items,
    onClick,
    onChange
}: ListProps) => {
    return (
        <StyledList
            onChange={onChange}
            onClick={onClick}
            role='list'
        >
            {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
            ))}
        </StyledList>
    );
};

List.defaultProps = {
};

export { List };