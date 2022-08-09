import { createContext, useState } from "react";
import { TODOS_FILTER_STATUS } from '../components/TodoFooter';
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext()

function TodoProvider(props) {
    const {
        error,
        item: todos,
        loading,
        saveItem: setTodos,
    } = useLocalStorage('TODOS', [])

    const [toSearchValue, setToSearchValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [filterStatus, setFilterStatus] = useState(TODOS_FILTER_STATUS.ALL)

    function clearCompletedTodos() {
        const filteredTodos = todos.filter(e => !e.completed)
        const todosToSet = [...filteredTodos]
        setTodos(todosToSet)
    }

    function createTodo({ text }) {
        const id = crypto.randomUUID()
        const newTodo = { id, text, completed: false }
        setTodos([...todos, newTodo])
    }

    function deleteTodo(id) {
        const filteredTodos = todos.filter(e => e.id !== id)
        const todosToSet = [...filteredTodos]
        setTodos(todosToSet)
    }

    function toggleTodo(id) {
        const todosToSet = todos.map(e =>
            e.id === id ? { ...e, completed: !e.completed } : { ...e }
        )
        setTodos(todosToSet)
    }

    function openModal() {

    }

    let filteredTodos = todos

    if (toSearchValue) {
        const toSearchValueLowerCase = toSearchValue.toLowerCase()
        filteredTodos = todos.filter(e => e.text.toLowerCase().includes(toSearchValueLowerCase))
    }
    if (filterStatus === TODOS_FILTER_STATUS.ACTIVE) {
        filteredTodos = todos.filter(e => !e.completed)
    }
    else if (filterStatus === TODOS_FILTER_STATUS.COMPLETED) {
        filteredTodos = todos.filter(e => e.completed)
    }


    return (
        <TodoContext.Provider value={{
            clearCompletedTodos,
            createTodo,
            deleteTodo,
            error,
            filteredTodos,
            filterStatus,
            isModalOpen, 
            loading,
            openModal,
            setFilterStatus,
            setIsModalOpen,
            setToSearchValue,
            todos,
            toggleTodo,
            toSearchValue,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };