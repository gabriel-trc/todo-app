import './TodoFooter.css';

const TODOS_FILTER_STATUS = {
    ACTIVE: 'active',
    ALL: 'all',
    COMPLETED: 'completed',
}

function TodoFooter({ filterStatus, setIsModalOpen, setFilterStatus }) {

    const onChangeFilterTodosByStatus = (args) => {
        const id = args.target.id
        const status = id.replace('filter_', '')
        setFilterStatus(status)
    }

    const onClickCreateTodo = () => {
        setIsModalOpen(prevState => !prevState)

    }

    const idRadioActive = `filter_${TODOS_FILTER_STATUS.ACTIVE}`
    const idRadioAll = `filter_${TODOS_FILTER_STATUS.ALL}`
    const idRadioCompleted = `filter_${TODOS_FILTER_STATUS.COMPLETED}`

    return (
        <section className="todo-footer">
            {/* <div className="todo-footer__counter">
                <span>{itemsLeft} items left</span>
            </div> */}
            <div className="todo-footer__filter">
                <div className="todo-footer__filter-option">
                    <input type="radio"
                        name="todo-radio-filter"
                        id={idRadioAll}
                        className="todo-footer__filter-input"
                        onChange={onChangeFilterTodosByStatus}
                        value={TODOS_FILTER_STATUS.ALL}
                        checked={filterStatus === TODOS_FILTER_STATUS.ALL ? 'checked' : ''} />
                    <label htmlFor={idRadioAll} >All</label>
                </div>
                <div className="todo-footer__filter-option">
                    <input type="radio"
                        name="todo-radio-filter"
                        id={idRadioActive}
                        className="todo-footer__filter-input"
                        onChange={onChangeFilterTodosByStatus}
                        value={TODOS_FILTER_STATUS.ACTIVE}
                        checked={filterStatus === TODOS_FILTER_STATUS.ACTIVE ? 'checked' : ''} />
                    <label htmlFor={idRadioActive} >Active</label>
                </div>
                <div className="todo-footer__filter-option">
                    <input type="radio"
                        name="todo-radio-filter"
                        id={idRadioCompleted}
                        className="todo-footer__filter-input"
                        onChange={onChangeFilterTodosByStatus}
                        value={TODOS_FILTER_STATUS.COMPLETED}
                        checked={filterStatus === TODOS_FILTER_STATUS.COMPLETED ? 'checked' : ''} />
                    <label htmlFor={idRadioCompleted} >Completed</label>
                </div>
            </div>
            {/* <div className="todo-footer__clear-completed">
                <button type="button" onClick={clearCompletedTodos}>Clear Completed</button>
            </div> */}
            <div className="todo-footer__create-todo">
                <button type="button" onClick={onClickCreateTodo}>Create todo</button>
            </div>
        </section>
    );
}
export { TodoFooter, TODOS_FILTER_STATUS }
