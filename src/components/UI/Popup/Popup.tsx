import React, { useContext } from 'react';
import './styles.scss'
import { ModalContext } from '@context';
interface IPopup {
 children: React.ReactNode
}
function Popup({children}: IPopup) {
    const {openPopup, rootRef} = useContext(ModalContext)
    return (
        <div  className={openPopup ? 'popup popup_open' : 'popup'}>
            <div ref={rootRef}  className="popup-container">
                {children}
            </div>
        </div>
    );
}

export default Popup;