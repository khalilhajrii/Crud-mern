import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import moment from "moment";

export default class EditTask extends Component {
    constructor(props) {
        super(props)

        // State
        this.state = {
            TaskName: '',
            Description: '',
            Deadline: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/tasks/edit-task/' + this.props.match.params.id).then(res => {
            this.setState({TaskName: res.data.TaskName, Description: res.data.Description, Deadline: res.data.Deadline});
        }).catch((error) => {
            console.log(error);
        })
    }

    onChangeTaskName = (e) => {
        this.setState({TaskName: e.target.value})
    }

    onChangeDescription= (e) => {
        this.setState({Description: e.target.value})
    }

    onChangeDeadline = (e) => {
        this.setState({Deadline: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const taskObject = {
            TaskName: this.state.TaskName,
            Description: this.state.Description,
            Deadline: this.state.Deadline
        };

        axios.put('http://localhost:4000/tasks/update-task/' + this.props.match.params.id, taskObject).then((res) => {
            console.log(res.data)
            console.log('task a été modifié')
        }).catch((error) => {
            console.log(error)
        })

        // rederiction task list
        this.props.history.push('/task-list')
    }
    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={
                this.onSubmit
            }>
                <Form.Group controlId="Name">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text"
                        value={
                            this.state.TaskName
                        }
                        onChange={
                            this.onChangeTaskName
                        }/>
                </Form.Group>

                <Form.Group controlId="Description">
                    <Form.Label>Description </Form.Label>
                    <Form.Control type="text"
                        value={
                            this.state.Description
                        }
                        onChange={
                            this.onChangeDescription
                        }/>
                </Form.Group>

                <Form.Group controlId="Deadline">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="date"
                        value={
                            moment(this.state.Deadline).format("DD/MM/YYYY")
                        }
                        onChange={
                            this.onChangeDeadline
                        }/>
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update 
                </Button>
            </Form>
        </div>);
    }
}
