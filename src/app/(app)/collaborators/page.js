import { SideBar } from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import styles from './collaborators.module.css';
export default function CollaboratorsPage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Header />
                <h1>Collaborators</h1>
            </main>
        </div>
    )
}