import React from 'react';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from './components/Course';
import Home from './components/Home';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from "./components/Header";
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {

  const btnHandle=()=>
  {
    toast.success("Done",{
      position: "top-center"
    });
  };

  return (
    <div>
        <Router>
        <ToastContainer/>
        <Container>
        <Header />
          <Row>
            <Col md={4}>
             <Menu />
            </Col>
            <Col md={8}>
              <Routes exact path="/" element={<Home/>}  />
              <Routes exact path="/add-course" element={<AddCourse />} />
              <Routes exact path="/view-course" element={<AllCourse />} / >
            </Col>
          </Row>
        </Container>
        </Router>

    </div>  
  ); 
}

export default App;

