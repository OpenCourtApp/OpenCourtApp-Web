import { SideBar } from "@/components/SideBar/SideBar";
import styles from './calendar.module.css';
export default function CalendarPage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <h1>Calendar</h1>
        </div>
    )
}