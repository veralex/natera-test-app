import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import Rodal from 'rodal';
import { AppContext } from 'components/context';
import { ModalFooterDivider, ModalContent } from './styled';
import './modal.css';

const Modal = ({ children }) => {
    const { modalOpen, setModalOpen } = useContext(AppContext);
    const isMobile = useMediaQuery({ maxWidth: '375px' });
    return (
        <Rodal
            visible={modalOpen}
            onClose={() => {
                setModalOpen(false);
                ReactDOM.unmountComponentAtNode(
                    document.getElementById('modal-content')
                );
            }}
            customStyles={{ height: '33em', width: `${isMobile ? 22 : 44}em` }}
            animation="slideUp"
        >
            <ModalFooterDivider>
                <hr />
            </ModalFooterDivider>
            <ModalContent id="modal-content">{children}</ModalContent>
        </Rodal>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
};

export { Modal };
