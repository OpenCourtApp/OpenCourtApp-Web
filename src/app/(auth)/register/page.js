'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './register.module.css';
import { Button } from '../../../components/Button';

export default function RegisterScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                <div className={styles.brandRow}>
                    <Image src="/teste-logomarca.svg" alt="OpenCourt" width={104} height={34} className={styles.logomarca} />
                    <span className={styles.brandTag}>Create account</span>
                </div>
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Invite your team with one shared system</p>
                    <h1 className={styles.impactPhrase}>Register the school. Start scheduling in minutes.</h1>
                    <p className={styles.description}>
                        OpenCourt keeps the booking experience consistent from the first login to the
                        daily schedule, with clear sizing and a compact layout.
                    </p>
                </div>
                <div className={styles.featureStack}>
                    <div className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        <p>Teacher and collaborator access</p>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        <p>Unified court booking flow</p>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        <p>Structured status and activity views</p>
                    </div>
                </div>
            </aside>

            <main className={styles.main}>
                <form
                    className={styles.formCard}
                    onSubmit={(e) => {
                        e.preventDefault();
                        router.push('/dashboard');
                    }}
                >
                    <div className={styles.formHeader}>
                        <p className={styles.title}>Create your account</p>
                        <p className={styles.subtitle}>Set up OpenCourt for your school.</p>
                    </div>

                    <label className={styles.field}>
                        <span className={styles.label}>Full name</span>
                        <input
                            type="text"
                            placeholder="Ana Ferreira"
                            className={styles.input}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            autoComplete="name"
                        />
                    </label>

                    <label className={styles.field}>
                        <span className={styles.label}>Email address</span>
                        <input
                            type="email"
                            placeholder="you@schooledu"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </label>

                    <div className={styles.gridTwo}>
                        <label className={styles.field}>
                            <span className={styles.label}>Password</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>Confirm</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={styles.input}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                        </label>
                    </div>

                    <Button type="submit" size="lg" className={styles.submitButton}>
                        Enter
                    </Button>

                    <p className={styles.signupText}>
                        Already have an account?
                        <Link href="/login" className={styles.signupLink}>
                            Sign in
                        </Link>
                    </p>
                </form>
            </main>
        </div>
    );
}