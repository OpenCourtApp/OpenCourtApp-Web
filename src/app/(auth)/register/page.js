'use client';

import styles from './register.module.css';
import { Lock } from 'react-feather'
import { useState } from 'react';

export default function RegisterScreen() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        accessToken: '',
        schoolRole: ''
    });
    const [error, setError] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerModal}>
                <img src="/teste-logomarca-black.svg" alt="Logomarca" className={styles.logomarca} />

                <h1 className={styles.title}>Create your account</h1>
                <p className={styles.subtitle}>Fill in your details and authorization token</p>

                <div className={styles.fieldGroup}>
                    <div>
                        <label className={styles.label}>Full name</label>
                        <input
                            type="text"
                            placeholder="Ana Ferreira"
                            className={styles.input}
                            name="fullName"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Email address</label>
                        <input
                            type="email"
                            placeholder="you@school.edu"
                            className={styles.input}
                            name="email"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className={styles.input}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Access token</label>
                        <div className={styles.inputWithIcon}>
                            <span className={styles.inputIcon}>
                                <Lock size={16}/>
                            </span>
                            <input
                                type="text"
                                placeholder="OC-XXXX-XXXX"
                                className={styles.input}
                                name="accessToken"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>School role</label>
                        <select className={styles.select} defaultValue="" name="schoolRole" onChange={handleInputChange}>
                            <option value="" disabled>Select your role</option>
                            <option value="student-council">Grêmio Estudantil</option>
                            <option value="teacher">Professor</option>
                            <option value="coordination">Coordenação</option>
                        </select>
                    </div>
                </div>

                <button className={styles.registerButton}>Register</button>

                <p className={styles.signIn}>
                    Already have an account? <a href="/login">Sign in</a>
                </p>
            </div>
        </div>
    );
}