import React from 'react';
import './Modals.scss'

const Modal =({children, isOpen, closeModal})=> {
        return (
            <>
                {isOpen && <div onClick={closeModal} className="modal__wrapper">
                    <div onClick={(e) => e.stopPropagation()} className="modal">{children}</div>
                </div>}
            </>
        )
}


export default Modal