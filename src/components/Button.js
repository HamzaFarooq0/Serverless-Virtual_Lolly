import React from 'react'
import './Button.css'

const Button = ({ button_val, button_class }) => {
    return (
        <div>
            <button className={button_class}>{button_val}</button>
        </div>
    )
}

export default Button
