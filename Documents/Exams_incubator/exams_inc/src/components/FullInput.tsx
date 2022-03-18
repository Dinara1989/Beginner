import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsType={
    callBack:(title: string)=>void
}


export const FullInput=(props:PropsType)=>{
    let [title, setTitle] = useState("")

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler();
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        props.callBack(title);
        setTitle("");
    }

    return(
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTaskHandler}>+</button>
        </div>
    )
}