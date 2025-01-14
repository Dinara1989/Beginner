import React, {ChangeEvent, KeyboardEvent} from 'react';

type propsType={
    title: string
    setTitle:(title: string)=>void
    callBack:()=>void
}

export const Input = (props:propsType) => {
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.callBack();
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
            <input value={props.title}
               onChange={ onChangeHandler }
               onKeyPress={ onKeyPressHandler }
        />
    );
};

