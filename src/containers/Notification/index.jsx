import React from 'react';

import Modal from '@components/Modal/index.jsx';
import css from './index.module.sass';

const Notifiaction = ({ closeHandler, content }) => {
    return (
        <Modal closeHandler={closeHandler} classNames={css.index}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Modal>
    )
}

export default Notifiaction;
