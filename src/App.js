import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise_list.component";
import EditExercise from "./components/edit_exercise.component";
import CreateUser from "./components/create_user.component";
import CreateExercise from "./components/create_exercise.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
        <Route path='/' exact component={ExerciseList} />
      </div>
    </Router>
  );
}

export default App;
