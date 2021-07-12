import React, { useContext } from 'react';

import css from './index.module.sass';
import Modal from '@components/Modal';
import InputText from '@components/InputText';
import heroes from '@constants/heroes.cjs';
import { GameContext } from '@src/App.jsx';

const SecretWordModal = ({ successInputHandler, closeModal }) => {
    const context = useContext(GameContext);

    function checkSecretWord({ target: { value } }) {
		const secretHero = Object.values(heroes).find(({ secretWord }) => value.toLowerCase().includes(secretWord));
		
		if (
            secretHero &&
            !context.heroes.some(hero => hero.id === secretHero.id)
        ) {
            successInputHandler(secretHero);
            closeModal();
        }
	}

    return (
        <Modal closeHandler={closeModal}>
            <div className={css.modal}>
                <InputText
                    placeholder="введите секретное слово"
                    changeHandler={checkSecretWord}
                />
            </div>
        </Modal>
    )
}

export default SecretWordModal;
