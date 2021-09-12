import React from 'react';

import css from './index.module.sass';
import { CloseIcon } from '@components/icons/index.jsx';

const Modal = ({ children, closeHandler, classNames }) => (
    <div className={css.index}>
        <div className={`${css.wrap} ${classNames}`}>
            {children}
            <div onClick={closeHandler} className={css.close} >
                {CloseIcon}
            </div>
        </div>
    </div>
);

export default Modal;
