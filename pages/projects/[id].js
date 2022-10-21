import { useRouter } from "next/router";
import Head from 'next/head';


export const getServerSideProps = (context) => {
    const { id } = context.query;
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

    const projectContent = data.filter(item => item.param === id);
    return {
        props: { projectData: projectContent }
    }
}


const ProjectsItem = ({ projectData }) => {

    console.log(projectData)
    const projectDataprojectData = projectData.length === 0;
    return (
        <>
            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <title>Shang | Projects</title>
            </Head>
            <div style={projectDataprojectData ? { display: "none" } : { display: "block" }}>
                <h1>Project Item</h1>
            </div>
            <div style={projectDataprojectData ? { display: "block" } : { display: "none" }}>
                <h1>ERROR</h1>
            </div>
        </>

    );
}
export default ProjectsItem;