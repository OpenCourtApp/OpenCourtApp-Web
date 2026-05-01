'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import styles from './calendar.module.css';
export default function CalendarPage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                    title="Calendar"
                    action={
                        <Button onClick={() => console.log("New Booking")} className={styles.btnNewBooking}>
                            <Plus size={18} strokeWidth={3.5} />
                            New Booking
                        </Button>
                    } />
                <h1>Calendar</h1>
            </main>
        </div>
    )
}