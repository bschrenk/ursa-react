// Toast.stories.tsx
import React, { useState, useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Toast, ToastColor, ToastPosition, ToastProps } from './Toast';
import { Button } from '../Button/Button';

export default {
    title: 'Example/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta;

const Template: Story<ToastProps> = (args) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToastClose = () => {
        setIsVisible(false);
      };

      
    const triggerToast = () => {
        setIsVisible(true);
    };

    return (
        <>
            <Button onClick={triggerToast}>Trigger Toast</Button>
            {isVisible && (
                <Toast
                    message={args.message}
                    position={args.position}
                    visible={isVisible}
                    duration={args.duration}
                    color={args.color}
                    onClose={handleToastClose}
                />
            )}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    message: 'This is a default toast message',
};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
    message: 'Custom position - top-left',
    position: ToastPosition.TopLeft,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    message: 'Custom color - secondary',
    color: ToastColor.Primary,
};

export const CustomDuration = Template.bind({});
CustomDuration.args = {
    message: 'Custom duration - 5000ms',
    duration: 5000,
};

export const AllOptions = Template.bind({});
AllOptions.args = {
    message: 'Custom position, color, and duration',
    position: ToastPosition.TopRight,
    color: ToastColor.Secondary,
    duration: 5000,
};