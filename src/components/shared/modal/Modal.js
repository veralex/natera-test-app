import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Rodal from 'rodal';
import './modal.css';
import { AppContext } from '../..';

const Modal = ({ children }) => {
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
            <div id="modal-content">{children}</div>
        </Rodal>
    );
};

export { Modal };
