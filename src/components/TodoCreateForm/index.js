import React, { useContext } from 'react';
import './TodoCreateForm.css';
import { Modal } from '../Modal';
import { TodoContext } from '../../contexts';

function TodoCreateForm() {
    const { createTodo, setIsModalOpen } = useContext(TodoContext)
    const handleSubmit = function (event) {
        event.preventDefault();
        const inputTodoText = event.target.querySelector('input')
        const text = inputTodoText.value.trim()
        createTodo({ text })
        inputTodoText.value = ''
        setIsModalOpen(prevState => !prevState)
    }
    
    return (
        <Modal title="Crear TO-DO">
            <section className="create-todo-section">
                <form className="grid-row grid-row__border grid-row--dark" onSubmit={handleSubmit}>
                    <span className="check-circle check-circle--dark"></span><input className="create-todo-section__input" placeholder="Create new todo..." />
                </form>
            </section >
        </Modal>

    );
}

export { TodoCreateForm }