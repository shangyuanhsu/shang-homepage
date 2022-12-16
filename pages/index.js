/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import MySpline from "../components/MySpline";
import Title from "../components/Title";

export default function Home() {

  return (
    <>
      <Head>
        <meta name="description" content="shangyuan's homepage" />
        <meta name="author" content="shangyuan" />
        <title>Shang | Homepage</title>
      </Head>
      <MySpline />
      <section>
        <section className={styles.myInfo}>
          <div>
            <h2>Hsu,Shang-Yuan</h2>
            <p>1993 Born in Taiwan</p>
            <p>hsushangyuan@gmail.com</p>
          </div>
          <div className={styles.myPhoto}>
            <Image src="/img/shangPhoto.jpeg" width={150} height={150} alt="shang's phote" />
          </div>
        </section>

        <section>
          <p><b>Learning by doing : </b>Develop own structure to grow my self learning skill</p>
          <p><b>Working on : </b>Explore the appropriate procedure of work</p>
          <p><b>Teamwork : </b>Good at communicating & Engage in the conversation</p>
        </section>

        <section>
          <Title txt={"Skills"} />
          <p>HTML / CSS / JavaScript / VueJS / ReactJS / Ajax / NodeJS / PHP / MySQL / Mongodb / Git /</p>
        </section>

        <section>
          <Title txt={"Work Experience"} />
          <p><b>2022 -  present : </b>Cloudnifier Taiwan Front-end Engineer</p>
          <p>[CRM Customized page program development and maintenance]</p>
          <p><b>2020 -  present : </b>Teacher</p>
          <p>[Teaching UI design, HTML, CSS, JS]</p>
          <p><b>2020 -  2021 : </b>Network Learning Technology, NCU Web developer</p>
          <p>[Develop and maintain websites, including planning database, website vision, front-end function development, and back-end data organization]</p>
          <p><b>2015 -  present : </b>freelancer</p>
          <p>[Website Design, UIUX Design, Logo Design, Illustration]</p>
        </section>
        
        <section>
          <Title txt={"Education"} />
          <p>Master's deegree, Plastic arts, Tainan National University of the Arts</p>
          <p>Bachelor's degree, Fine Arts, Taipei National University of the Arts</p>
        </section>
      </section>
    </>
  )
}
