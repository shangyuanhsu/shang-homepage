import Head from 'next/head';
import styles from '../../styles/Projects.module.css';
import Project from "../../components/Project";


const Works = () => {
    const projectData = [

        {
            id: 0,
            title: "Math Island",
            image: "mi1.PNG",
            describe: "Students can learn math from the game, and teachers can also master the students' learning progress through this platform."
        },
        {
            id: 1,
            title: "Gridstack",
            image: "gridstack1.png",
            describe: "Can add chart or table or text, and can be dragged."
        },
        {
            id: 2,
            title: "Memory Game",
            image: "MemoryGame1.jpeg",
            describe: "Play memory game"
        },
        {
            id: 3,
            title: "To Do List",
            image: "todolist1.jpeg",
            describe: "Check To-do items."
        },
        {
            id: 4,
            title: "Chat Room",
            image: "chatroom1.png",
            describe: "Chatroom."
        },
        {
            id: 5,
            title: "Moold Ceramic Studio",
            image: "MCS1.png",
            describe: "The official website of the pottery studio (practice)."

        },
    ];

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

export default Works;