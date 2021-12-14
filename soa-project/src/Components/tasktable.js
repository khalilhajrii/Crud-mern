import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from "moment";

export default class TaskTable extends Component {
    //constructeur
    constructor(props) {
        super(props);
    }

    deleteTask = () => {
        axios.delete('http://localhost:4000/Tasks/delete-task/' + this.props.obj._id)
            .then((res) => {
                console.log('Task a été supprimé')
            }).catch((error) => {
                console.log(error)
            })
            window.location.reload();
            
    }
    
    render() {
        return (<tr>
            <td> {
                this.props.obj.TaskName
            }</td>
            <td> {
                this.props.obj.Description
            }</td>
            <td> {
                moment(this.props.obj.Deadline).format("DD/MM/YYYY")
            }</td>
            <td>
                <Link className="btn btn-primary"
                    to={
                        "/edit-task/" + this.props.obj._id
                }>
                    Edit
                </Link>
                <Link size="sm" onClick={this.deleteTask} className='btn btn-danger' variant="danger">Delete</Link>
                
            </td>
            
        </tr>);
    }
}
