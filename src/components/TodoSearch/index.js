import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../contexts';

function TodoSearch() {
    const { toSearchValue, setToSearchValue } = useContext(TodoContext)
    const handleChange = function (event) {
        event.preventDefault();
        const text = event.target.value.trim()
        setToSearchValue(text)
        //inputTodoText.value = ''
    }
    return (
        <section className="search-todo-section">
            <div className="grid-row grid-row__border grid-row--dark">
                <input className="search-todo-section__input" placeholder="Search todo's" onChange={handleChange} />
            </div>
            {/* <form className="grid-row grid-row__border grid-row--dark" onSubmit={handleSubmit}>
                <span className="check-circle check-circle--dark"></span>
            </form> */}
        </section >
    );
}

export { TodoSearch }