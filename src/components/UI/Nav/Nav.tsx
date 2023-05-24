import React, {useContext} from "react";
import Logo from "@components/UI/Logo/Logo";
import LinksMenu from "@components/UI/LinksMenu/LinksMenu";
import './styles.scss';
import { ModalContext } from "@context";
function Nav() {
    const {openMenu, handleMenu} = useContext(ModalContext)
    return (
        <nav className="nav">
            <Logo />
            <LinksMenu />
            <div onClick={handleMenu} className={openMenu ? 'button-menu button-menu_active' : 'button-menu'}>
                <span></span>
            </div>
        </nav>
    );
}

export default Nav;
