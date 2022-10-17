import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TasksBody } from "../components/task/TasksBody";

import '../components/styles/home.scss'
import { Pages } from "../components/Pages";

const Home = (props) => {
  return (
    <div className="home">
      <Header/>
      <TasksBody />
      <Pages />
      <Footer/>
    </div>
  );
}

export default Home
