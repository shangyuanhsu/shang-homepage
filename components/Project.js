import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Project = (props) => {
    return (
        <Link href={`../projects/${props.con.param}`}>
            <div className={styles.project}>
                <Image className={styles.projectImg} src={`/../public/img/projects/${props.con.image}`} width={2613} height={1644} alt="" />
                <h2>{props.con.title}</h2>
                <p>{props.con.describe}</p>
            </div>
        </Link>
    )

}
export default Project;