import { SideBar } from "@/components/SideBar/SideBar";
import styles from './dashboard.module.css';
export default function Dashboard() {
    return (
        <div className={styles.container}> 
            <SideBar />
            <h1>Dashboard</h1>
        </div>
    );
}