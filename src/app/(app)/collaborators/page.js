import { SideBar } from "@/components/SideBar/SideBar";
import styles from './collaborators.module.css';
export default function CollaboratorsPage() {
    return (
        <div className={styles.container}>
            <SideBar />
            <h1>Collaborators</h1>
        </div>
    )
}