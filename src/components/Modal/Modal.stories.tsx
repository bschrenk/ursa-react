import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal'; // Make sure to export ModalProps from Modal component
import { Button } from '../Button/Button'; // Assuming you have a Button component

const meta: Meta<ModalProps> = {
    title: 'Example/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Main: Story<ModalProps> = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <Button onClick={handleOpenModal}>Open Modal</Button>
            {isModalVisible && (
                <Modal modalTitle="A Fancy Title" onClose={handleOpenModal} visible={isModalVisible}>
                    <p>Modal content goes here</p>
                </Modal>
            )}
        </>
    );
};