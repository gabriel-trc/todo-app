import { useTodos } from '../../hooks/useTodos';
import { TodoContainer } from '../TodoContainer';
import { TodoSearch } from '../TodoSearch';
import { TodoFooter } from '../TodoFooter';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoCreateForm } from '../TodoCreateForm';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';


function App() {
  const {
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
  } = useTodos()
  // const incompleteTodos = filteredTodos.filter(e => !e.completed).length
  return (
    <>
      <TodoContainer>
        <TodoHeader />
        <TodoSearch toSearchValue={toSearchValue} setToSearchValue={setToSearchValue} />
        {/* // Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !todos.length) && <p>¡Crea tu primer TODO!</p>}
        <TodoList >
          {filteredTodos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
        </TodoList >
        <TodoFooter filterStatus={filterStatus} setIsModalOpen={setIsModalOpen} setFilterStatus={setFilterStatus} />
      </TodoContainer>
      {isModalOpen && <TodoCreateForm createTodo={createTodo} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export { App };
