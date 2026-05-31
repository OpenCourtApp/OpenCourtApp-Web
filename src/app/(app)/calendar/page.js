'use client'

import { useState } from "react";
import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Modal } from "@/components/Modal/Modal";
import { Calendar, Clock } from 'react-feather';
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
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="New Booking"
                subtitle="Reserve a court time slot"
                onConfirm={() => setIsModalOpen(false)}
                confirmLabel="Save Booking"
            >
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Event title</label>
                    <input placeholder="Basketball Practice" className={styles.input} />
                </div>
                <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Date</label>
                        <div className={styles.inputIcon}>
                            <Calendar size={15} />
                            <input type="date" className={styles.input} />
                        </div>
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Time</label>
                        <div className={styles.inputIcon}>
                            <Clock size={15} />
                            <input type="time" className={styles.input} />
                        </div>
                    </div>
                </div>

                <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                        Notes <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                        placeholder="Add relevant details about this booking..."
                        className={`${styles.input} ${styles.textarea}`}
                    />
                </div>
            </Modal>
        </div>
    )
}