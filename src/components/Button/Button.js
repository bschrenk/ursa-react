import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    id,
    children,
    disabled,
    onClick,
    onChange,
}) => {
    return (
        <button
            id={id}
            onChange={onChange}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;