import { linksMenuNav } from '@data';
import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
function LinksMenu() {
    return (
        <ul className='links-menu'>
            {linksMenuNav.map((item, key) => 
            <li key={key} className='links-menu-item'>
                <Link className='links-menu-item__link' to={item.href}>{item.title}</Link>
            </li>
            )}
        </ul>
    );
}

export default LinksMenu;