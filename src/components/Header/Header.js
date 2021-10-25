import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="containerHead">
            <div className="headerTitle">*HypeLearn Logo*</div>
            <img src={props.image} />
        </div>
    )
}

export default Header
