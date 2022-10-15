import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TodosBody } from "../components/TodosBody";

import '../components/styles/home.scss'

const Home = (props) => {
  return (
    <div className="home">
      <Header/>
      <TodosBody />
      <Footer/>
    </div>
  );
}

export default Home
