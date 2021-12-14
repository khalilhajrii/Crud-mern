import React, {Component} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TaskTable from './tasktable';

export default class TaskList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/tasks/').then(res => {
            this.setState({tasks: res.data});
        }).catch((error) => {
            console.log(error);
        })
    }

    DataTable() {
        return this.state.tasks.map((res, i) => {
            return <TaskTable obj={res} key={i} />;
        });
    }

    
    render() {
        
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Descritpion</th>
                        <th>
                            Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> {
                    this.DataTable()
                } </tbody>
            </Table>
        </div>);
    }
}
