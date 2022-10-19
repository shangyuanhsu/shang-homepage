import styles from "../styles/Projects.module.css";
import Image from "next/image";
const Project = (props)=>{
    return(
        <div className={styles.project}>
            <Image className={styles.projectImg} src={`/../public/img/projects/${props.con.image}`} width={2613} height={1644} alt="" />
            <h2>{props.con.title}</h2>
            <p>{props.con.describe}</p>
        </div>
    )

}
export default Project;