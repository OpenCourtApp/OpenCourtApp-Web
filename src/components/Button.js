import styles from './button.module.css';

export function Button({
    children,
    type = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) {
    const buttonClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`.trim();

    return (
        <button
            className={buttonClassName}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}