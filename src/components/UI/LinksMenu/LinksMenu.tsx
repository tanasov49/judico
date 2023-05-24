import { linksMenuNav } from '@data';
import './styles.scss';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '@context';
function LinksMenu() {
    const {openMenu} = useContext(ModalContext)
    return (
        <ul className={openMenu ? 'links-menu links-menu_active' : 'links-menu'}>
            {linksMenuNav.map((item, key) => 
            <li key={key} className='links-menu-item'>
                <Link className='links-menu-item__link' to={`${item.href}`}>{item.title}</Link>
            </li>
            )}
        </ul>
    );
}

export default LinksMenu;