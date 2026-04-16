'use client';

import styles from './register.module.css';

export default function registerScreen() {
    return (
        <div className={styles.container}>
            <main>
                <div className={styles.containerModal}>
                    <img src="/teste-logomarca.svg" alt="Logomarca" className={styles.logomarca} />
                    <p>Teste</p>
                </div>
            </main>
        </div>
    );
}