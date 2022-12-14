import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return (
        <section className="todo-list">
            <ul className="todo-list__ul">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }
