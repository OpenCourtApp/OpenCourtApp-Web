'use client'

import { SideBar } from "@/components/SideBar/SideBar";
import { Plus } from 'lucide-react';
import { Button } from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import styles from './dashboard.module.css';
export default function Dashboard() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header
                title="Dashboard"
                action={
                    <Button onClick={() => console.log("New Booking")} className={styles.btnNewBooking}>
                        <Plus size={18} strokeWidth={3.5}/>
                        New Booking
                    </Button>
                }/>
                <h1>Dashboard</h1>
            </main>
        </div>
    );
}