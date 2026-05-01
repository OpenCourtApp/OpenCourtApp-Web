import { SideBar } from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import styles from './calendar.module.css';
export default function CalendarPage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header />
                <h1>Calendar</h1>
            </main>
        </div>
    )
}