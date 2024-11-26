import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef, } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

// Component Modal

const Modal = (props) => {
    const [active, setActive] = useState(false);
    const modalContentRef = useRef(null); // Ref cho ModalContent

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    const handleOverlayClick = () => {
        if (modalContentRef.current) {
            modalContentRef.current.closeModal(); // Gọi hàm closeModal qua ref
        }
    };

    return (
        <div
            id={props.id} // ID của modal
            className={`modal ${active ? 'active' : ''}`} // Thêm lớp 'active' khi modal được mở
            onClick={handleOverlayClick}
        >
            {React.Children.map(props.children, (child) =>
                React.cloneElement(child, {
                    ref: modalContentRef, // Gắn ref cho ModalContent
                })
            )}
        </div>
    );
};
// Component con ModalContent
export const ModalContent = forwardRef((props, ref) => {
    // Tạo một ref để tham chiếu đến phần tử nội dung modal
    const contentRef = useRef(null);

    // Hàm đóng modal
    const closeModal = () => {
        // Loại bỏ lớp 'active' khỏi phần tử cha (modal)
        contentRef.current.parentNode.classList.remove('active');
        // Gọi callback onClose nếu được truyền vào
        if (props.onClose) props.onClose();
    };

    useImperativeHandle(ref, () => ({
        closeModal,
    }));

    return (
        <div
            ref={contentRef}
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
        >
            {props.children}
        </div>
    );
});

export default Modal;
