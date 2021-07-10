import React, { forwardRef } from 'react';

import css from './index.module.sass';

const InputText = forwardRef(({ placeholder, changeHandler }, ref) => {
    return (
        <input
            ref={ref}
            className={css.index}
            onChange={changeHandler}
            placeholder={placeholder}
        />
    )
});

InputText.defaultProps = {
    placeholder: '',
    changeHandler: null
}

export default InputText;
