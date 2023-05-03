import AsideHeader from '@components/Asides/AsideHeader/AsideHeader';
import Nav from '@components/UI/Nav/Nav';
import React from 'react';
import './styles.scss'
function Header() {
    return (
        <header className='header'>
            <Nav />
            <AsideHeader />
        </header>
    );
}

export default Header;