'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Header } from "@/components/Header/Header";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { Edit2, X } from 'react-feather';
import { useState } from "react";
import styles from './collaborators.module.css';

export default function CollaboratorsPage() {
    const collaborators = [
        { id: 1, name: 'Maria Santos', role: 'Principal', email: 'm.santos@escola.edu' },
        { id: 2, name: 'Ana Ferreira', role: 'Teacher', email: 'a.ferreira@escola.edu' },
        { id: 3, name: 'Carlos Lima', role: 'Teacher', email: 'c.lima@escola.edu' },
        { id: 4, name: 'Rafael Alves', role: 'Student Rep.', email: 'r.alves@escola.edu' },
        { id: 5, name: 'Julia Ramos', role: 'Teacher', email: 'j.ramos@escola.edu' },
        { id: 6, name: 'Pedro Costa', role: 'Teacher', email: 'p.costa@escola.edu' },
    ];

    const badgeClass = (role) => {
        if (role === 'Principal') return `${styles.badge} ${styles.badgePrincipal}`;
        if (role === 'Student Rep.') return `${styles.badge} ${styles.badgeStudent}`;
        if (role === 'Teacher') return `${styles.badge} ${styles.badgeTeacher}`;
        return '';
    };

    const initials = (name) =>
        name.split(' ').map(n => n[0]).join('');

    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h1 className={styles.titleModal}>New Collaborator</h1>
                <p>Olá! Modifique este conteúdo com o formulário que desejar.</p>
            </Modal>
        </div>
    )
}