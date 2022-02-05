import React from "react";
import { Link } from "react-router-dom";
import ImageNote from "../assets/to-do-list.jpg";
import ImagePerson from "../assets/think-somthing.jpg";

const Home = () => {
    
    return(
        <div className="container text-center h-100 mt-2 mb-5">
                    <h1 className="pt-4">ToDo List</h1>
                    <div className="row ">
                        <div className="col-lg-12">
                            <h3> It’s a list of tasks you need to complete or things that you want to do. </h3>
                            </div>
                            <div className="col-lg-6 p-3 mt-3">
                            <p className="home-text">Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists and todo list apps.                                
                            </p>
                            <img src={ImagePerson} className="rounded pt-3" alt="someone thinking" />
                            </div>
                            <div className="col-lg-6 mt-3">
                                <Link to="./enter-todo"><img src={ImageNote} alt="image of note"  /></Link>
                            </div>
                       
                    </div>

        </div>
    );
}

export default Home;