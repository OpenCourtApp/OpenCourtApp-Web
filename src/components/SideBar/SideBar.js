'use client'

import styles from './sidebar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Grid, Calendar, Users, ChevronDown, ChevronUp, User, LogOut, ChevronRight } from 'react-feather';
import { motion, AnimatePresence } from "framer-motion";

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
        <aside className={styles.container}>
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
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className={styles.dropdownMenu}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <div className={styles.dropdownUser}>
                                <div className={styles.avatar}>{initials}</div>
                                <div>
                                    <p className={styles.userName}>{user.name}</p>
                                    <p className={styles.dropdownEmail}>{user.email}</p>
                                </div>
                            </div>
                            <Link href="/settings" className={styles.dropdownItem}>
                                <div className={styles.dropdownItemLeft}>
                                    <User size={15} />
                                    Settings
                                </div>
                                <ChevronRight size={14} />
                            </Link>
                            <div className={styles.dropDownDivider} />
                            <Link href="/login" className={styles.dropdownLogout}>
                                <LogOut size={15} />
                                Log out
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

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
        </aside>
    );
}