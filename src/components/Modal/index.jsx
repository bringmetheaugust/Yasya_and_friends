import React, { useRef } from 'react';

import css from './index.module.sass';
import { CloseIcon } from '@components/icons/index.jsx';
import useOutsideClick from '@hooks/useOutsideClick.js';

const Modal = ({ children, closeHandler, classNames }) => {
    const wrapRef = useRef();

    useOutsideClick(wrapRef, closeHandler);

    return (
        <div className={`${css.index} full-screen`}>
            <div ref={wrapRef} className={`${css.wrap} ${classNames}`}>
                <div onClick={closeHandler} className={css.close} >
                    {CloseIcon}
                </div>
                {children}
            </div>
        </div>
    );
};

Modal.defaultProps = { classNames: '' };

export default Modal;
