import React, { useState, useEffect } from 'react';
import styled, { DefaultTheme } from 'styled-components';

enum ToastPosition {
    TopLeft = 'top-left',
    TopRight = 'top-right',
    BottomLeft = 'bottom-left',
    BottomRight = 'bottom-right',
}

enum ToastColor {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface ToastProps {
    message: string;
    duration?: number;
    position?: ToastPosition;
    color?: ToastColor;
}

const getPositionStyles = (position: ToastPosition | undefined) => {
    switch (position) {
        case ToastPosition.TopLeft:
            return `
        top: 20px;
        left: 20px;
      `;
        case ToastPosition.TopRight:
            return `
        top: 20px;
        right: 20px;
      `;
        case ToastPosition.BottomLeft:
            return `
        bottom: 20px;
        left: 20px;
      `;
        case ToastPosition.BottomRight:
        default:
            return `
        bottom: 20px;
        right: 20px;
      `;
    }
};

const getColorStyles = (color: ToastColor | undefined, themeColors: DefaultTheme[string]) => {
    switch (color) {
        case ToastColor.Secondary:
            return `
        background-color: ${themeColors.secondary};
      `;
        case ToastColor.Primary:
        default:
            return `
        background-color: ${themeColors.primary};
      `;
    }
};

const ToastWrapper = styled.div<{ position?: ToastPosition; color?: ToastColor; isVisible: boolean }>`
  position: fixed;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};
  ${props => getPositionStyles(props.position)};
  ${props => getColorStyles(props.color, props.theme.colors)};
`;

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, position = ToastPosition.BottomRight, color = ToastColor.Primary }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);

    return (
        <ToastWrapper isVisible={isVisible} position={position} color={color}>
            {message}
        </ToastWrapper>
    );
};

export { Toast, ToastProps, ToastPosition, ToastColor };