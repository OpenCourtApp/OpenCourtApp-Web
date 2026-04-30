import styles from './button.module.css';

export function Button({ children, type, className = '', ...props }) {
    return (
        <button className={`${styles.button} ${className}`} type={type} {...props}>
            {children}
        </button>
    );
}