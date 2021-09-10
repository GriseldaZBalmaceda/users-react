import React from 'react';
import styles from './ErrorModal.module.css'
import Button from './Button'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.closeModal}></div>
}
const Modal = props => {
return <div className={`${styles.card} ${styles.modal} `}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                <Button onClick={props.closeModal}>Okay</Button>
                </footer>
            </div>
}
const ErrorModal = (props) => {

    return (
      <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop closeModal={props.closeModal} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal 
                    message={props.message} 
                    title={props.title} 
                    closeModal={props.closeModal} 
                />,
                document.getElementById('modal-root')
            )}
      </React.Fragment>       
    )
};

export default ErrorModal