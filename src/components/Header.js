import React from 'react';
import { FiBell, FiFilter, FiUser } from 'react-icons/fi';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__user">
                <div className="header__avatar">
                    <FiUser className="header__avatar-icon" />
                </div>
                <div className="header__details">
                    <h3>Floyd Miles</h3>
                    <p>FREE ACCOUNT</p>
                </div>
            </div>
            <div className="header__icons">
                    <FiBell className="header__icon" />
                <FiFilter className="header__icon" />
            </div>
        </div>
    )
}

export default Header
