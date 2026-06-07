'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { Modal } from "@/components/Modal/Modal";
import { Header } from "@/components/Header/Header";
import { Button } from "@/components/Button/Button";
import { Plus } from 'lucide-react';
import { Calendar, Clock } from 'react-feather';
import { useState } from "react";
import { weekData, upcomingEvents } from "@/utils/mockData";
import styles from './dashboard.module.css';

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                    title="Dashboard"
                    subtitle={today}
                    action={
                        <Button onClick={() => setIsModalOpen(true)} className={styles.btnNewBooking}>
                            <Plus size={18} strokeWidth={3.5} />
                            New Booking
                        </Button>
                    }
                />

                <div className={styles.content}>

                    {/* Cards de estatísticas */}
                    <div className={styles.statsRow}>

                        {/* Status da quadra */}
                        <div className={`${styles.card} ${styles.cardCourt}`}>
                            <div className={styles.cardTopRow}>
                                <span className={styles.cardLabel}>COURT STATUS</span>
                                <span className={styles.statusBadge}>
                                    <span className={styles.statusDot} />
                                    In use
                                </span>
                            </div>
                            <p className={styles.courtTitle}>Basketball Practice</p>
                            <p className={styles.courtSub}>Booked by Prof. Carlos Lima</p>
                            <div className={styles.courtTime}>
                                <Clock size={13} />
                                <span>11:00 – 12:30 · ends in 47 min</span>
                            </div>
                        </div>

                        {/* Reservas de hoje */}
                        <div className={`${styles.card} ${styles.cardStat}`}>
                            <span className={styles.cardLabel}>TODAY'S BOOKINGS</span>
                            <p className={styles.statNumber}>4</p>
                            <div className={styles.statBar}>
                                <div className={styles.statBarFill} style={{ width: '40%' }} />
                            </div>
                            <span className={styles.statHint}>+1 vs yesterday</span>
                        </div>

                        {/* Horários disponíveis */}
                        <div className={`${styles.card} ${styles.cardStat}`}>
                            <span className={styles.cardLabel}>AVAILABLE SLOTS</span>
                            <p className={styles.statNumber}>6</p>
                            <div className={styles.statBar}>
                                <div className={styles.statBarFill} style={{ width: '60%' }} />
                            </div>
                            <span className={styles.statHint}>of 10 total</span>
                        </div>

                    </div>

                    {/* Gráfico + próximos eventos */}
                    <div className={styles.bottomRow}>

                        {/* Gráfico semanal */}
                        <div className={`${styles.card} ${styles.cardChart}`}>
                            <div className={styles.chartHeader}>
                                <div>
                                    <p className={styles.chartTitle}>Weekly court usage</p>
                                    <p className={styles.chartSub}>Mar 10 – 16, 2026</p>
                                </div>
                                <button className={styles.weekBtn}>This week</button>
                            </div>
                            <div className={styles.chartArea}>
                                {weekData.map((data) => (
                                    <div key={data.day} className={styles.barGroup}>
                                        <div className={styles.barWrapper}>
                                            <div
                                                className={`${styles.bar} ${data.active ? styles.barActive : ''}`}
                                                style={{ height: `${data.value}%` }}
                                            />
                                        </div>
                                        <span className={`${styles.dayLabel} ${data.active ? styles.dayLabelActive : ''}`}>
                                            {data.day}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Próximos eventos de hoje */}
                        <div className={`${styles.card} ${styles.cardUpcoming}`}>
                            <p className={styles.chartTitle}>Upcoming today</p>
                            <div className={styles.eventList}>
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className={`${styles.eventItem} ${event.active ? styles.eventItemActive : styles.eventItemInactive}`}
                                    >
                                        <p className={styles.eventTitle}>{event.title}</p>
                                        <p className={styles.eventMeta}>{event.time} · {event.prof}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal */}
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
    );
}