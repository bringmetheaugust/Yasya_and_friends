import React, { forwardRef } from 'react';

import css from './index.module.sass';

const InputText = forwardRef(({ placeholder, changeHandler, classNames }, ref) => {
    return (
        <input
            ref={ref}
            className={`${css.index} ${classNames}`}
            onChange={changeHandler}
            placeholder={placeholder}
        />
    )
});

InputText.defaultProps = {
    placeholder: '',
    changeHandler: null,
    classNames: ''
}

export default InputText;
