import Head from 'next/head';
import styles from '../../styles/Projects.module.css';
import Project from "../../components/Project";

export const getServerSideProps = () => {
    const data = [
        {
            "id": 0,
            "param": "MathIsland",
            "title": "Math Island",
            "image": "mi1.PNG",
            "describe": "Students can learn math from the game, and teachers can also master the students' learning progress through this platform."
        },
        {
            "id": 1,
            "param": "Gridstack",
            "title": "Gridstack",
            "image": "gridstack1.png",
            "describe": "Can add chart or table or text, and can be dragged."
        },
        {
            "id": 2,
            "param": "MemoryGame",
            "title": "Memory Game",
            "image": "MemoryGame1.jpeg",
            "describe": "Play memory game"
        },
        {
            "id": 3,
            "param": "ToDoList",
            "title": "To Do List",
            "image": "todolist1.jpeg",
            "describe": "Check To-do items."
        },
        {
            "id": 4,
            "param": "ChatRoom",
            "title": "Chat Room",
            "image": "chatroom1.png",
            "describe": "Chatroom."
        },
        {
            "id": 5,
            "param": "MooldCeramicStudio",
            "title": "Moold Ceramic Studio",
            "image": "MCS1.png",
            "describe": "The official website of the pottery studio (practice)."
        }
    ];
    return {
        props: { projectData: data }
    }
}

const Projects = ({ projectData }) => {
    return (
        <>
            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <title>Shang | Projects</title>
            </Head>
            <section className={styles.worksBox}>
                {projectData.map(element => {
                    return <Project con={element} key={element.id} />
                })}
            </section>
        </>
    );
}

export default Projects;