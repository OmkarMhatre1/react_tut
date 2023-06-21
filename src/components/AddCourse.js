import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from './../api/bootapi';

const AddCourse = () => {

    useEffect (()=>{
        document.title = "Add-Course"
    }, []);

    const [course , setCourse] = useState({});

    //form handler fuction
    const handleForm =(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    //creating fuction to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/addProduct`,data).then(
            (Response)=>{
                console.log(Response);
            },(Error)=>{
                console.log(Error);    
            }
        )
    };

    return(
        <Fragment>

            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
            <FormGroup>
                    <label for="name">Name</label>
                    <Input type="text" placeholder="Enter Here" name="name" id="name"
                    onChange={(e)=>{
                        setCourse({...course, name:e.target.value});
                    }}></Input>
            </FormGroup>
            <FormGroup>
                    <label for="quantity">quantity</label>
                    <Input type="text" placeholder="Enter Here" name="quantity" id="quantity"
                    onChange={(e)=>{
                        setCourse({...course, quantity:e.target.value});
                    }}></Input>
            </FormGroup>
            <FormGroup>
                    <label for="price">price</label>
                    <Input type="price" placeholder="Enter Here" name="price" id="price"
                     onChange={(e)=>{
                        setCourse({...course, price:e.target.value});
                    }}></Input>
            </FormGroup>
              {/* <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId"></Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Here" name="title" id="title"></Input>
                </FormGroup> 
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter Here" name="description" id="description"
                        style={{height:100}}></Input> 
                </FormGroup> */}
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ms-2">clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;