import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateTask extends Component { // creation de constructeur
    constructor(props) {
        super(props)

        // creation des fonctions
        this.onChangeTaskName = this.onChangeTaskName.bind(this); // importation de contenu de state
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // initioalisation
        this.state = {
            TaskName: '',
            Description: '',
            Deadline: ''
        }
    }

    onChangeTaskName = (e) => {
        this.setState({TaskName: e.target.value})
        console.log(e.target.value)
    }

    onChangeDescription = (e) => {
        this.setState({Description: e.target.value})
    }

    onChangeDeadline = (e) => {
        this.setState({Deadline: e.target.value})
        console.log(e.target.value)
    }

    onSubmit = () => {

        const taskObject = {
            TaskName: this.state.TaskName,
            Description: this.state.Description,
            Deadline: this.state.Deadline
        };
        // consomation d'un API avec axios
        axios.post('http://localhost:4000/tasks/create-task', taskObject).then(res => console.log(res.data));
        this.setState({TaskName: '', Description: '', Deadline: ''})
        this.props.history.push('/task-list') // rederiction
    }

    render() {
        return (
            <div class="form-wrapper">
                <Form onSubmit={
                    this.onSubmit
                }>
                    <Form.Group controlId="Task">
                        <Form.Label>Task name</Form.Label>
                        <Form.Control type="text"
                            value={
                                this.state.TaskName
                            }
                            onChange={
                                this.onChangeTaskName
                            }/>
                    </Form.Group>

                    <Form.Group controlId="Descritpion">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="Text"
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
                                this.state.Deadline
                            }
                            onChange={
                                this.onChangeDeadline
                            }/>
                    </Form.Group>

                    <Button ClassName="create" variant="danger" size="lg" block="block" type="submit">
                        Create Task
                    </Button>
                </Form>
            </div>
        );
    }
}
