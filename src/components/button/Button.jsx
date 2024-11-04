import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

// Định nghĩa component Button
const Button = props => {
    return (
        <button
            className={`btn ${props.className}`} // Kết hợp class 'btn' với class được truyền vào từ props
            onClick={props.onClick ? () => props.onClick() : null} // Gọi hàm onClick nếu có
        >
            {props.children}
        </button>
    );
}

// Định nghĩa component OutlineButton kế thừa Button
export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

// Kiểm tra kiểu dữ liệu của props
Button.propTypes = {
    onClick: PropTypes.func // onClick phải là một hàm
}

export default Button;
