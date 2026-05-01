import { SideBar } from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import styles from './dashboard.module.css';
export default function Dashboard() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header />
                <h1>Dashboard</h1>
            </main>
        </div>
    );
}