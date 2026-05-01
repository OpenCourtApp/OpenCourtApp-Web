'use client';

import styles from './login.module.css';
import { Button } from '../../../components/Button/Button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
        // Simula um processo de autenticação
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard');
        }, 1000);
    };

    return (
        <div className={styles.container}>
            {/* parte esquerda */}
            <aside className={styles.aside}>
                <img src="/teste-logomarca-white.svg" alt="Logomarca" className={styles.logomarca} />
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
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <p>Password</p>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className={styles.input} 
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" onClick={handleLogin}>Sign In</Button>
                    <p className={styles.signupText}>Don't have an account?<a href="/register" className={styles.signupLink}>Register Here</a></p>
                </form>
            </main>
        </div>
    );
}