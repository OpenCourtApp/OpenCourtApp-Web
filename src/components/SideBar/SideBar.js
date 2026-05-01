'use client'

import styles from './sidebar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Grid, Calendar, Users, ChevronDown, ChevronUp, User, LogOut, ChevronRight } from 'react-feather';

const user = {
    name: 'Ana Ferreira',
    role: 'Teacher',
    email: 'a.ferreira@escola.edu',
};

const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Grid },
    { label: 'Calendar', href: '/calendar', icon: Calendar },
    { label: 'Collaborators', href: '/collaborators', icon: Users },
];

export function SideBar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const initials = user.name.split(' ').map(n => n[0]).join('');

    const navClass = (path) =>
        `${styles.navItem} ${pathname === path ? styles.active : ''}`;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src="/teste-logomarca-black.svg" alt="Logomarca" className={styles.logomarca} />
            </div>

            <nav className={styles.middle}>
                {navItems.map(({ label, href, icon: Icon }) => (
                    <Link key={href} href={href} className={navClass(href)}>
                        <Icon size={18} />
                        {label}
                    </Link>
                ))}
            </nav>

            <div className={styles.menuWrapper}>
                {menuOpen && (
                    <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownUser}>
                            <div className={styles.avatar}>{initials}</div>
                            <div>
                                <p className={styles.userName}>{user.name}</p>
                                <p className={styles.dropdownEmail}>{user.email}</p>
                            </div>
                        </div>
                        <div className={styles.dropdownItem}>
                            <span className={styles.dropdownItemLeft}>
                                <User size={15} />
                                Settings
                            </span>
                            <ChevronRight size={14} />
                        </div>
                        <div className={styles.dropdownLogout}>
                            <LogOut size={15} />
                            Log out
                        </div>
                    </div>
                )}

                <div className={styles.footer} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>{initials}</div>
                        <div>
                            <p className={styles.userName}>{user.name}</p>
                            <p className={styles.userRole}>{user.role}</p>
                        </div>
                    </div>
                    {menuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </div>
        </div>
    );
}