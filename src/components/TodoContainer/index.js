import React from 'react';
import './TodoContainer.css';

function TodoContainer({ children }) {
    return (
        <div className="todo-container todo-container--dark">
            <div className="todo-container__content">
                {children}
            </div>
        </div>
    );
}

export { TodoContainer }
