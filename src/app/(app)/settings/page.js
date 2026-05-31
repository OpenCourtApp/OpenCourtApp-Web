'use client';

import { SideBar } from '@/components/SideBar/SideBar';
import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button/Button';
import { useState } from 'react';
import styles from './settings.module.css';

export default function SettingsPage() {
    const [theme, setTheme] = useState('light');
    const [emailNewBooking, setEmailNewBooking] = useState(true);
    const [emailBookingChanges, setEmailBookingChanges] = useState(false);

    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header title="Settings" subtitle="Manage your account" />

                <div className={styles.content}>

                    {/* Informações do Perfil */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Profile information</h2>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label className={styles.label}>Full name</label>
                                <input
                                    className={styles.input}
                                    defaultValue="Ana Ferreira"
                                    placeholder="Full name"
                                />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Email address</label>
                                <input
                                    className={styles.input}
                                    defaultValue="a.ferreira@escola.edu"
                                    placeholder="Email address"
                                    type="email"
                                />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>New password</label>
                            <input
                                className={styles.inputFull}
                                placeholder="Leave blank to keep current"
                                type="password"
                            />
                        </div>
                        <div className={styles.saveRow}>
                            <Button className={styles.btnSaveChanges}>Save changes</Button>
                        </div>
                    </section>

                    {/* Token de Autorização */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Authorization token</h2>
                        <label className={styles.label}>
                            Access token <span className={styles.labelMeta}>(system-issued)</span>
                        </label>
                        <div className={styles.tokenInputWrapper}>
                            <span className={styles.tokenIcon}>🔒</span>
                            <input
                                className={styles.inputToken}
                                value="OC-·····-····"
                                readOnly
                            />
                        </div>
                        <div className={styles.tokenWarning}>
                            <span className={styles.warningIcon}>⚠</span>
                            Issued by the principal. This field cannot be edited by users.
                        </div>
                    </section>

                    {/* Aparência do site */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Appearance</h2>
                        <p className={styles.label}>Theme</p>
                        <p className={styles.cardSubtitle}>Choose how OpenCourt looks on your device</p>
                        <div className={styles.themeOptions}>
                            {['light', 'dark', 'system'].map((t) => (
                                <label key={t} className={`${styles.themeOption} ${theme === t ? styles.themeOptionActive : ''}`}>
                                    <div className={styles.themePreview} data-theme={t}>
                                        <div className={styles.themePreviewBar} />
                                        <div className={styles.themePreviewContent} />
                                    </div>
                                    <div className={styles.themeRadioRow}>
                                        <input
                                            type="radio"
                                            name="theme"
                                            value={t}
                                            checked={theme === t}
                                            onChange={() => setTheme(t)}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.themeLabel}>
                                            {t.charAt(0).toUpperCase() + t.slice(1)}
                                        </span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* Notificações */}
                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>Notifications</h2>
                        <div className={styles.notifItem}>
                            <div>
                                <p className={styles.notifTitle}>Email on new booking</p>
                                <p className={styles.notifDesc}>Get notified when a court is booked</p>
                            </div>
                            <button
                                className={`${styles.toggle} ${emailNewBooking ? styles.toggleOn : ''}`}
                                onClick={() => setEmailNewBooking(!emailNewBooking)}
                                aria-label="Toggle email on new booking"
                            >
                                <span className={styles.toggleThumb} />
                            </button>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.notifItem}>
                            <div>
                                <p className={styles.notifTitle}>Email on booking changes</p>
                                <p className={styles.notifDesc}>Alerts when a reservation is modified</p>
                            </div>
                            <button
                                className={`${styles.toggle} ${emailBookingChanges ? styles.toggleOn : ''}`}
                                onClick={() => setEmailBookingChanges(!emailBookingChanges)}
                                aria-label="Toggle email on booking changes"
                            >
                                <span className={styles.toggleThumb} />
                            </button>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}