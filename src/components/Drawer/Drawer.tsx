import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Styled components for Drawer
const StyledDrawer = styled.div<{ placement: string }>`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  transition: transform 0.3s;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &.drawer-entering,
  &.drawer-exiting {
    transform: ${props => {
        switch (props.placement) {
            case 'left':
                return 'translateX(-100%)';
            case 'top':
                return 'translateY(-100%)';
            case 'bottom':
                return 'translateY(100%)';
            default: // 'right'
                return 'translateX(100%)';
        }
    }};
  }
`;

export interface DrawerProps {
    placement: string,
    children: ReactNode,
}

// Define Drawer component
const Drawer = ({
    placement = 'right',
    children,
}: DrawerProps) => {
    const classes = `drawer ${placement}`;

    return (
        <StyledDrawer
            className={classes}
            placement={placement}
        >
            {children}
        </StyledDrawer>
    );
};

export default Drawer;