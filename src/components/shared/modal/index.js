import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Rodal from 'rodal';
import { AppContext } from '../..';
import { ModalFooterDivider, ModalContent } from './styled';
import './modal.css';

export const Modal = ({ children }) => {
    const { modalOpen, setModalOpen } = useContext(AppContext);
    return (
        <Rodal
            visible={modalOpen}
            onClose={() => {
                setModalOpen(false);
                ReactDOM.unmountComponentAtNode(
                    document.getElementById('modal-content')
                );
            }}
            customStyles={{ height: '33em', width: '44em' }}
            animation="slideUp"
        >
            <ModalFooterDivider>
                <hr />
            </ModalFooterDivider>
            <ModalContent id="modal-content">{children}</ModalContent>
        </Rodal>
    );
};
