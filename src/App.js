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
  Routes,
  Route
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
        
        <ToastContainer/>
        <Container>
        <Header />
          <Row>
            <Col md={4}>
             <Menu />
            </Col>
            <Col md={8}>
            <Router>
              <Routes>
                {/* <Route exact path='/Dash' element={<Dash />} />
                <Route exact path="/ippopay/customerchangepass" element={<ChangePass />} />
                <Route exact path="/Merchant/NewTransaction" element={<NewTransaction />} />
                <Route exact path="/Merchant/MyTransaction" element={<TransMID />} />
                <Route exact path="/Merchant/MytransactionKeys" element={<MyKeys />} /> */}
                <Route exact path="/" element={<Home/>}  />
                <Route exact path="/add-course" element={<AddCourse />} />
                <Route exact path="/view-course" element={<AllCourse />} />
              </Routes>
            </Router>

            </Col>
          </Row>
        </Container>
     

    </div>  
  ); 
}

export default App;

