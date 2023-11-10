import React, { ReactNode } from 'react';
import { Button } from '../Button/Button';
import styled from 'styled-components';
import { HeadingType, Typography } from '../Typography/Typography';

const StyledModal = styled.div`
    overflow: auto;
    display: block;
    background: #FFF;
    padding: 1rem;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: 0px 0px 0.03rem 0.12rem ${(props) => props.theme.colors.primary};
    margin: 4rem auto;
    max-width: 80%;
`;

const StyledContainer = styled.div`
    height: 100%;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1050;
    background: #80808094;
`;

export interface ModalProps {
    id?: string;
    modalTitle?: string | undefined;
    children?: ReactNode;
    visible?: boolean;
    onClose?: () => void;
}

const Modal = ({ id, modalTitle, children, visible, onClose }: ModalProps) => {

    return (
        <>
            {visible && (
                <StyledContainer>
                    <StyledModal id={id}>
                        {modalTitle && <Typography type={HeadingType.H4} content={modalTitle} />}
                        <Button id='close' type='button' onClick={onClose}>Close</Button>
                        {children}
                    </StyledModal>
                </StyledContainer>
            )}
        </>
    );
};

Modal.defaultProps = {
    visible: true,
};

export { Modal };





