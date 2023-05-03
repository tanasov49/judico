import React from "react";
import Logo from "@components/UI/Logo/Logo";
import LinksMenu from "@components/UI/LinksMenu/LinksMenu";
import './styles.scss';
function Nav() {
    return (
        <nav className="nav">
            <Logo />
            <LinksMenu />
        </nav>
    );
}

export default Nav;
