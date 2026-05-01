'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Header } from "@/components/Header/Header";
import { Button } from "@/components/Button/Button";
import styles from './collaborators.module.css';
export default function CollaboratorsPage() {
    const collaborators = [
        { name: 'Ana Ferreira', role: 'Teacher' },
        { name: 'Carlos Lima', role: 'Teacher' },
        { name: 'João Costa', role: 'Coordination' },
    ];
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                    title="Collaborators"
                    subtitle={`${collaborators.length} authorized users`}
                    action={
                        <Button onClick={() => alert("Add Collaborator")} className={styles.btnCollaborator}>
                            <Plus size={18} strokeWidth={3.5} />
                            Add Collaborator
                        </Button>
                    } />
                <h1>Collaborators</h1>
            </main>
        </div>
    )
}