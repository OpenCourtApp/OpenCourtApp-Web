'use client';

import styles from './header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    // Pego o nome da página atual a partir do pathname
    const pageName = pathname.split('/').filter(Boolean).slice(-1)[0] || 'dashboard';

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
        </header>
    );
}