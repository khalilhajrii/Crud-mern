import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import CreateTask from './Components/create-task'
import EditTask from './Components/update-task'
import TaskList from './Components/show-task'

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={'/create-task'}
                                    className="nav-link">
                                    Task management tool 
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={'/create-task'}
                                        className="nav-link">
                                        Create Task
                                    </Link>
                                </Nav>

                                <Nav>
                                    <Link to={'/task-list'}
                                        className="nav-link">
                                        Task List
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Switch>
                                    <Route exact path="/"
                                        component={
                                            (props) => <CreateTask {...props}/>
                                            }/>
                                        

                                    <Route exact path="/create-task"
                                        component={
                                            (props) => <CreateTask {...props}/>
                                            }/>
                                        

                                    <Route exact path="/edit-task/:id"
                                        component={
                                            (props) => <EditTask {...props}/>
                                            }/>
                                        

                                    <Route exact path="/task-list"
                                        component={
                                            (props) => <TaskList {...props}/>
                                            }/>
                                        

                                </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>
    </div>
    )
}

export default App
