import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Exercise = props => {
    let exer = props.exercise;
    return(
        <tr>
            <td>{exer.username}</td>
            <td>{exer.description}</td>
            <td>{exer.duration}</td>
            <td>{Date.parse(exer.date)}</td>
            <td>{
                <p>
                    <Link to={"/edit/"+props.exercise._id} className="btn btn-primary">
                        Edit
                    </Link>
                    |
                    <span className="btn btn-primary"
                        onClick = {()=> {props.deleteExercise(props.exercise._id)}}>
                        Delete
                    </span>
                </p>
            }</td>
        </tr>
        
    )
}

export default class ExcersiseList extends Component{
    constructor(props){
        super(props);

        this.exerciseList = this.exerciseList.bind(this);
        this.deleteExercise =this.deleteExercise.bind(this);

        this.state={
            exercises : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/exercise/")
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch(err => {console.log(err)});
    }

    deleteExercise(id){
        axios.delete("http://localhost:5000/exercise/"+id)
            .then(res => {console.log(res)});

        this.setState({
            exercises: this.state.exercises.filter(ex => ex._id!==id)
        })
    }

    exerciseList(){
        return this.state.exercises.map( exercise => {
            return <Exercise exercise = {exercise} deleteExercise = {this.deleteExercise} key = {exercise._id} />
        })
    }

    render(){
        return(
            <div>
                <table Style='width: 100%'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Update or Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        );
    };
}