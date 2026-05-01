'use client';

import styles from './header.module.css';

export function Header({ title, subtitle, children, action }) {

    return (
        <header className={styles.header}>
            <div className={styles.headerTitle}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.headerContent}>
                {children}
            </div>
            <div className={styles.btnAction}>
                {action}
            </div>
        </header>
    );
}