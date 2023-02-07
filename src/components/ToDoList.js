import { useState } from 'react';
import { ToDo } from './ToDo'
import { Done } from './Done';
import './style/toDoList.css'
export function ToDoList() {
    let [doneList, setDoneList] = useState([])
    const getDoneList = (doneList) => {
        setDoneList(doneList);
    }
    return (
        <div className='container'>
            <div className='title-description'>
                <h1 data-testid='bigTitle-test-1'>To Do List</h1>
            </div>
            <div className='todo-done'>
                <ToDo getDoneList={getDoneList} className='todo' />
                <Done doneList={doneList} className='done' />
            </div>
        </div>
    );
}