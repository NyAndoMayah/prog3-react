import { useState } from "react"
import './style/toDo.css'

export function ToDo({ getDoneList }) {
    let [inputValue, setInputValue] = useState('');
    let [toDoList, setToDoList] = useState([]);
    let [doneList, setDoneList] = useState([]);
    let handleChange = ({ target: { value } }) => {
        setInputValue(value);
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue !== "") {
            setToDoList([...toDoList, inputValue])
            setInputValue('');
        }
    }
    const handleClick = (e) => {
        if (e.target.checked) {
            setDoneList([...doneList, e.target.value])
            let table = toDoList.filter((element) => element !== e.target.value);
            setToDoList(table);
        }
    }
    getDoneList(doneList)
    return (
        <div data-testid='div-test-1'>
              <div className="enter-data">
            <input className= 'input'type='text' value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} data-testid='input-test-1' />
            </div>
            <div className="list">
            <h3 data-testid='title-test-1'>To do</h3>
                {toDoList.map((element) => <div key={element} className='list-element'><input type="checkbox" value={element} onClick={handleClick} /><p>{element}</p></div>)}
            </div>
        </div>)
}