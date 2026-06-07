'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Header } from "@/components/Header/Header";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { Edit2, X, User, Users, ArrowDown } from 'react-feather';
import { useState } from "react";
import { collaborators } from "@/utils/mockData";
import styles from './collaborators.module.css';

export default function CollaboratorsPage() {

    const badgeClass = (role) => {
        if (role === 'Principal') return `${styles.badge} ${styles.badgePrincipal}`;
        if (role === 'Student Rep.') return `${styles.badge} ${styles.badgeStudent}`;
        if (role === 'Teacher') return `${styles.badge} ${styles.badgeTeacher}`;
        return '';
    };

    const initials = (name) =>
        // split separa o nome e sobrenome, map pega a primeira letra de cada um e join junta tudo em uma string
        name.split(' ').map(n => n[0]).join('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // o [name] é uma forma de usar valores dinamicos para servir de chave ao valor que sera inserido
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ schoolRole: '' });

    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                    title="Collaborators"
                    subtitle={`${collaborators.length} authorized users`}
                    action={
                        <Button onClick={() => setIsModalOpen(true)} className={styles.btnCollaborator}>
                            <Plus size={18} strokeWidth={3.5} />
                            Add Collaborator
                        </Button>
                    } />
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th style={{ width: '30%' }}>NAME</th>
                                <th style={{ width: '15%' }}>ROLE</th>
                                <th style={{ width: '30%' }}>EMAIL</th>
                                <th style={{ width: '10%' }}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {collaborators.map((collaborator) => (
                                <tr key={collaborator.id}>
                                    <td>
                                        <div className={styles.nameCell}>
                                            <div className={styles.avatar}>{initials(collaborator.name)}</div>
                                            {collaborator.name}
                                        </div>
                                    </td>
                                    <td>
                                        {badgeClass(collaborator.role)
                                            ? <span className={badgeClass(collaborator.role)}>{collaborator.role}</span>
                                            : collaborator.role
                                        }
                                    </td>
                                    <td>{collaborator.email}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <Button className={styles.btnEdit} onClick={() => alert(`Edit ${collaborator.name}?`)}>
                                                <Edit2 size={15} />
                                            </Button>
                                            {collaborator.role !== 'Principal' && (
                                                <Button className={styles.btnDelete} onClick={() => alert(`Remove ${collaborator.name}?`)}>
                                                    <X size={20} />
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="New Collaborator"
                subtitle="Add a new authorized user"
                onConfirm={() => setIsModalOpen(false)}
                confirmLabel="Save Collaborator"
            >

                <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Name</label>
                        <div className={styles.inputIcon}>
                            <User size={15} />
                            <input
                                type="text"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John"
                            />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Surname</label>
                        <div className={styles.inputIcon}>
                            <Users size={15} />
                            <input
                                type="text"
                                className={styles.input}
                                value={formData.surname}
                                onChange={handleInputChange}
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        placeholder="john.doe@example.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className={styles.label}>School role</label>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="" name="schoolRole" onChange={handleInputChange}>
                            <option value="" disabled>Select your role</option>
                            <option value="student-council">Grêmio Estudantil</option>
                            <option value="teacher">Professor</option>
                            <option value="coordination">Coordenação</option>
                        </select>
                        <ArrowDown size={15} className={styles.selectIcon} />
                    </div>
                </div>

            </Modal>
        </div>
    )
}