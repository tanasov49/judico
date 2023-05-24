import Nav from '@components/UI/Nav/Nav';
import React, {useContext} from 'react';
import './styles.scss'
import { ModalContext } from '@context';
function Header() {
    const {openMenu} = useContext(ModalContext)
    return (
        <header className={openMenu ? 'header header_active' : 'header'}>
            <Nav />
        </header>
    );
}

export default Header;