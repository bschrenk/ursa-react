import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

const setDisabledBackground = (disabled: boolean | undefined) => {
    return disabled ? '#CECECE' : '#FFFFFF';
}

const StyledChip = styled.span<{ disabled?: boolean }>`  
    border: .1rem solid ${(props) => props.theme.colors.primary};
    background: ${(props) => setDisabledBackground(props.disabled)};
    padding: 0.4rem;
    border-radius: 1.5rem;
    cursor: pointer;
    user-select: none;

    &:focus {
        outline: none;
    }
`;

export interface ChipProps {
    label: string,
    disabled: boolean,
    id?: string,
    onClick?: MouseEventHandler
}

const Chip = ({
    label,
    disabled,
    id,
    onClick
}: ChipProps) => {
    const handleClick: MouseEventHandler = (event) => {
        if (!disabled && onClick) {
            onClick(event);
        }
    };

    return (
        <StyledChip onClick={handleClick} aria-disabled={disabled} id={id} disabled={disabled}>
            {label}
        </StyledChip>
    );
};

Chip.defaultProps = {
    disabled: false,
};

export { Chip };