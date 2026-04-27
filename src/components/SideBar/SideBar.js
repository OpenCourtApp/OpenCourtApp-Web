'use client'

import styles from './sidebar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Grid, Calendar, Users, ChevronDown } from 'react-feather';

const user = {
    name: 'Ana Ferreira',
    role: 'Teacher',
};

const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Grid },
    { label: 'Calendar', href: '/calendar', icon: Calendar },
    { label: 'Collaborators', href: '/collaborators', icon: Users },
];

export function SideBar() {
    const pathname = usePathname();

    const initials = user.name.split(' ').map(n => n[0]).join('');

    const navClass = (path) =>
        `${styles.navItem} ${pathname === path ? styles.active : ''}`;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src="/teste-logomarca.svg" alt="Logomarca" className={styles.logomarca} />
            </div>

            <nav className={styles.middle}>
                {navItems.map(({ label, href, icon: Icon }) => (
                    <Link key={href} href={href} className={navClass(href)}>
                        <Icon size={18} />
                        {label}
                    </Link>
                ))}
            </nav>

            <div className={styles.footer}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>{initials}</div>
                    <div>
                        <p className={styles.userName}>{user.name}</p>
                        <p className={styles.userRole}>{user.role}</p>
                    </div>
                </div>
                <ChevronDown size={16} />
            </div>
        </div>
    );
}