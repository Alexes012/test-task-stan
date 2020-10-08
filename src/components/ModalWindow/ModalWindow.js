import React from 'react'
import style from './ModalWindow.module.css'

const ModalWindow = ({children, closeModal, show, width}) => {
    const closeHandler = (event) => {
        closeModal()
    };
    if (!show) {
        return null
    }
    return (
        <>
            <div className={style.modalOverlay} onClick={closeHandler} />
            <div className={style.modal} style={{width}}>
                <div className={style.modalClose} onClick={closeHandler}>&times;</div>
                {children}
            </div>
        </>
    )
};

export default ModalWindow;