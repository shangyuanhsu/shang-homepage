import Head from 'next/head';
import Image from "next/image";


export const getServerSideProps = (context) => {
    const { id } = context.query;
    const data = [
        {
            "id": 0,
            "param": "MathIsland",
            "title": "Math Island",
            "image": "mi1.PNG",
            "imgArr": ["mi2.PNG", "mi3.PNG"],
            "describe": "Mathematical Island mainly uses computers as learning aids for students to assist teachers in teaching. Math Island presents mathematical concepts in the form of interactive games and guides students to self-paced learning in the form of curriculum maps. Through challenging mathematical tasks, students can plan and manage their own learning according to their own abilities, thereby enhancing their confidence and interest. Teachers can clearly grasp the learning status and progress of each student through the learning process, and give students different suggestions and help to solve students' learning difficulties.",
            "skill": { "design": ["PhotoShop", "llustrator", "XD"], "development": ["HTML", "CSS", "JS", "PHP", "MySQL"] },
            "iWantToSay":"Mainly maintain programs and develop new requirements, and organize student learning data."
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
    const hasProjectData = projectData.length === 0;
    return (
        <>
            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <title>Shang | Projects</title>
            </Head>
            <div style={hasProjectData ? { display: "none" } : { display: "block" }}>
                <h1>{projectData[0].title}</h1>
                <Image src={`/../public/img/projects/${projectData[0].image}`} width={2613} height={1644} alt="" />
                <h2>Project Describe</h2>
                <p>
                    {projectData[0].describe}
                </p>
               
                <h2>Design : </h2>
                <p>{projectData[0].skill.design.join(" / ")}</p>
                <h2>Development : </h2>
                <p>{projectData[0].skill.development.join(" / ")}</p>
                <h2>I want to say : </h2>
                <p>{projectData[0].iWantToSay}</p>

            </div>
            <div style={hasProjectData ? { display: "block" } : { display: "none" }}>
                <h1>Oops!</h1>
                <p>no results</p>
            </div>
        </>

    );
}
export default ProjectsItem;