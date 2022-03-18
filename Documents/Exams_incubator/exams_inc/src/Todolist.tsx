import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    console.log(title)

    // const addTask = () => {
    //     props.addTask(title);
    //     setTitle("");
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    // const onAllClickHandler = () => props.changeFilter("all");
    // const onActiveClickHandler = () => props.changeFilter("active");
    // const onCompletedClickHandler = () => props.changeFilter("completed");

    const changeFilters=(filterValue:FilterValuesType)=>{
        props.changeFilter(filterValue)
    }

    const addTaskHandler=()=>{
        props.addTask(title)
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <Input title={title} setTitle={setTitle} callBack={addTaskHandler}/>
        <Button name={'+'} callBack={addTaskHandler} />

        {/*<FullInput callBack={props.addTask}/>*/}
        <>
            {/*<div>*/}
            {/*    <input value={title}*/}
            {/*           onChange={ onChangeHandler }*/}
            {/*           onKeyPress={ onKeyPressHandler }*/}
            {/*    />*/}
            {/*    <button onClick={addTask}>+</button>*/}
            {/*</div>*/}
        </>

        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callBack={()=>changeFilters('all')}/>
            <Button name={'Active'} callBack={()=>changeFilters('active')}/>
            <Button name={'Completed'} callBack={()=>changeFilters('completed')}/>


        </div>
    </div>
}
