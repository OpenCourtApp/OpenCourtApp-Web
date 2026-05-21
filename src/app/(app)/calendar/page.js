'use client'

import { useState } from "react";
import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Modal } from "@/components/Modal/Modal";
import styles from './calendar.module.css';

export default function CalendarPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                    title="Calendar"
                    action={
                        <Button onClick={() => setIsModalOpen(true)} className={styles.btnNewBooking}>
                            <Plus size={18} strokeWidth={3.5} />
                            New Booking
                        </Button>
                    } />
                <h1>Calendar</h1>
            </main>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h1 className={styles.titleModal}>New Booking</h1>
            </Modal>
        </div>
    )
}