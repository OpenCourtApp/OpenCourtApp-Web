'use client';

import styles from './login.module.css';
import { Button } from '../../../components/Button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        // Simula um carregamento de autenticação
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <p className={styles.loadingText}>Loading...</p>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            {/* parte esquerda */}
            <aside className={styles.aside}>
                <img src="/teste-logomarca.svg" alt="Logomarca" className={styles.logomarca} />
                <div className={styles.ellipse}>
                    <p className={styles.impactPhrase}>Schedule courts. Eliminate confusion.</p>
                    <p className={styles.description}>A centralized booking platform for schools. Know exactly who reserved the court and when — with zero overlap.</p>
                </div>
                <div className={styles.ellipse2}>
                    <p>Real-time booking visibility</p>
                    <p>Role-based access control</p>
                    <p>Authorized collaborators only</p>
                </div>
            </aside>

            {/* parte direita */}
            <main className={styles.main}>
                <form className={styles.form} onSubmit={(e) => {
                    e.preventDefault();
                    router.push('/dashboard');
                }}>
                    <p className={styles.title}>Welcome Back!</p>
                    <p className={styles.subtitle}>Sign in to your OpenCourt account</p>
                    <p>Email address</p>
                    <input 
                        type="email" 
                        placeholder="you@school.edu" 
                        className={styles.input} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>Password</p>
                    <input 
                        type="password" 
                        placeholder="••••••••" 
                        className={styles.input} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Sign In</Button>
                    <p className={styles.signupText}>Don't have an account?<a href="/register" className={styles.signupLink}>Register Here</a></p>
                </form>
            </main>
        </div>
    );
}