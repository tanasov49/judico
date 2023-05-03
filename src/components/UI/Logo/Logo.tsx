import React from 'react';
import { Link } from 'react-router-dom';
import LogoPage from '@images/logo.png';
import './styles.scss';
function Logo() {
    return (
        <Link className='logo' to='/'>
            <img src={LogoPage} alt='logo' />
        </Link>
    );
}

export default Logo;