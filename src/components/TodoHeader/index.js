import React from 'react';
import './TodoHeader.css';


function TodoHeader() {
    return (
        <header className="header">
            <h1 className="header__title">TODO</h1>
            <button className="header__button header__button--dark"></button>
        </header>
    );
}

export { TodoHeader }
