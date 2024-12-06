import React from 'react';
import './Button.scss';

const Button = ({ onClick, className, children }) => {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <button 
            className={`btn ${className || ''}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export const OutlineButton = ({ onClick, className, children }) => {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <Button
            className={`btn-outline ${className || ''}`}
            onClick={handleClick}
        >
            {children}
        </Button>
    );
};

export default Button;
