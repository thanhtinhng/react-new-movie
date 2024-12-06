import React, { useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({ active, onClose, children, className }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(active);
    }, [active]);

    const handleClose = () => {
        setIsActive(false);
        if (onClose) onClose();
    };

    return (
        <div 
            className={`modal ${isActive ? 'active' : ''} ${className || ''}`}
            onClick={handleClose}
        >
            <div 
                className="modal__content"
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
