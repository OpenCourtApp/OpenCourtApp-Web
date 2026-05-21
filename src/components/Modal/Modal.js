import styles from './modal.module.css'
import { Button } from '../Button/Button';

export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
                <Button onClick={onClose}>cancel</Button>
            </div>
        </div>
    )
}