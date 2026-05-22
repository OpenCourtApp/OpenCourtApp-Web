// components/Modal/Modal.jsx
import styles from './modal.module.css'
import { X, Check } from 'react-feather'
import { Button } from '../Button/Button'

export function Modal({ isOpen, onClose, title, subtitle, children, onConfirm, confirmLabel = 'Save' }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>{title}</h2>
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                    <Button className={styles.closeBtn} onClick={onClose} >
                        <X size={18} />
                    </Button>
                </div>

                <div className={styles.body}>
                    {children}
                </div>

                <div className={styles.footer}>
                    <Button className={styles.cancelBtn} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button className={styles.confirmBtn} onClick={onConfirm}>
                        <Check size={18} />{confirmLabel}
                    </Button>
                </div>
            </div>
        </div>
    )
}