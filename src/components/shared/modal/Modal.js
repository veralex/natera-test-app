import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './modal.css';

import { useContext } from 'react';
import { AppContext } from '../../';

const Animated = styled.div`
    display: ${props => (props.open ? 'flex' : 'none')};
`;

const Overlay = styled(Animated)`
    position: fixed;
    height: 100%;
    width: 100%;
    justify-content: center;
    background-color: #000;
    opacity: 0.3;
`;

const Modal = styled(Animated)`
    width: 698px;
    position: relative;
    background-color: #fff;
    .modal-content-wrapper {
        padding: 0px 60px;
        width: 100%;
        height: 100%;
    }
    & hr {
        position: absolute;
        bottom: 70px;
        left: 60px;
        right: 60px;
        margin: 0px;
        border: 1px solid ${props => props.theme.lightGray};
    }
`;

const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${props => props.theme.label};
    &:hover {
        cursor: pointer;
    }
`;

/**
 * Fully passive modal component
 */
const PostModal = ({ children }) => {
    const container = document.getElementById('modal');

    const { modalOpen, setModalOpen } = useContext(AppContext);

    const onClose = () => {
        const overlay = document.getElementsByClassName('overlay-show').item(0);
        const modal = document.getElementsByClassName('modal-show').item(0);
        if (overlay && modal) {
            overlay.classList.remove('overlay-show');
            void overlay.offsetWidth;
            overlay.classList.add('overlay-hide');

            modal.classList.remove('modal-show');
            void overlay.offsetWidth;
            modal.classList.add('modal-hide');
        }
        setTimeout(() => setModalOpen(false), 400);
    };

    useEffect(() => {
        if (!modalOpen) {
            const overlay = document
                .getElementsByClassName('overlay-show')
                .item(0);
            const modal = document.getElementsByClassName('modal-show').item(0);
            if (overlay && modal) {
                overlay.classList.remove('overlay-show');
                void overlay.offsetWidth;
                overlay.classList.add('overlay-hide');

                modal.classList.remove('modal-show');
                void overlay.offsetWidth;
                modal.classList.add('modal-hide');
            }
            setTimeout(() => setModalOpen(false), 400);
        }
    }, [modalOpen, container, setModalOpen]);

    return ReactDOM.createPortal(
        <>
            <Overlay open={modalOpen} className="overlay-show" />
            <Modal open={modalOpen} className="modal-show">
                <CloseButton className="material-icons" onClick={onClose}>
                    close
                </CloseButton>
                <hr />
                <div class="modal-content-wrapper">{children}</div>
            </Modal>
        </>,
        container
    );
};

export { PostModal };
