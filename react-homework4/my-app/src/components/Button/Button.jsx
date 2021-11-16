import React from 'react';
import './Button.scss'


const Button = ({text, onClick, children, className}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>{text || children}</button>
    )
}


export default Button