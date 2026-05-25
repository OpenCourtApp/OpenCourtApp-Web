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
                <div className={styles.modalContainer}>
                    <h1 className={styles.titleProfile}>Profile information</h1>
                    <div className={styles.row}>
                        <h5 className={styles.label}>Full name</h5>
                        <h5 className={styles.label}>Email Address</h5>
                    </div>
                    <div className={styles.rowInput}>
                        <input className={styles.input}/>
                        <input className={styles.input}/>
                    </div>
                    <h5 className={styles.label}>New Password</h5>
                    <input className={styles.input}/>
                    <Button className={styles.btnSaveChanges}>Save Changes</Button>
                </div>
                <div className={styles.modalContainer}>

                </div>
            </main>
        </div>
    )
}