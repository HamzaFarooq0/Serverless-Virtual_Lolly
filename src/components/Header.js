import React from 'react'
import './Header.css'

const Header = ({ head_class, head, para_class, para }) => {
    return (
        <div>
            <h1 className={head_class}>{head}</h1>
            <p className={para_class}>{para}</p>
        </div>
    )
}

export default Header