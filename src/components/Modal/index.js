import { createPortal } from 'react-dom';
import './Modal.css';

function Modal({ children, title, setIsModalOpen }) {

    const onClickCloseModal = () => {
        setIsModalOpen(prevState => !prevState)
    }

    return createPortal(<div className="modal">
        <div className="modal-container">
            <header className="modal-container__header">
                <h1>{title}</h1>
                <button type="button" onClick={onClickCloseModal}>x</button>
            </header>
            <main>
                {children}
            </main>
            {/* <footer>
                <button type="button" onClick={onClickCloseModal}>Save</button>
            </footer> */}
        </div>
    </div>,
        document.getElementById('modal')
    );
}

export { Modal };