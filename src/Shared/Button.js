import React from 'react';

const Button = ({ children }) => {
    return (
        <button class="btn btn-primary text-white">{children}</button>
    );
};

export default Button;