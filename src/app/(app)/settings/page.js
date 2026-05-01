'use client';

import { SideBar } from '@/components/SideBar/SideBar';
import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button/Button';
import styles from './settings.module.css';

export default function SettingsPage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                    title="Settings"
                    subtitle="Manage your account"
                />
                <h1>Settings</h1>
            </main>
        </div>
    )
}