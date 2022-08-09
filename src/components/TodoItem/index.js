import React, {useContext} from "react";
import { TodoContext } from '../../contexts';
import "./TodoItem.css";

function TodoItem({ completed, id, text }) {
    const { deleteTodo, toggleTodo } = useContext(TodoContext)
    const liClassNames = `todo-item todo-item--dark grid-row grid-row--dark`
    const spanCheckClassNames = `check-circle check-circle--dark ${completed ? 'check-circle--completed' : ''}`
    const textClassNames = `todo-item__text ${completed ? 'todo-item__text--completed' : ''}`


    const onToggleComplete = () => {
        toggleTodo(id)
    }

    const onDelete = () => {
        deleteTodo(id)
    }

    return (
        <li className={liClassNames} >
            <span className={spanCheckClassNames} onClick={onToggleComplete}></span>
            <p className={textClassNames}>{text}</p>
            <span className="todo-item__delete-icon" onClick={onDelete}></span>
        </li>
    );
}

export { TodoItem }