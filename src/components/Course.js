import React from "react";
import{
    Card, 
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import axios from "axios";
import base_url from './../api/bootapi';
import { toast } from "react-toastify";

const Course=({course , update})=>{

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/delete/${id}`).then(
            (Response)=>{
                toast.success("Deleted");
                update(id);
            },(Error)=>{
                toast.error("Not deleted");
            }
        )
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText >{course.description}</CardText>
                <Container>
                    <Button onClick={()=>{
                        deleteCourse(course.id);
                    }} color="danger">Delete</Button>
                    <Button color="warning ms-2">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default Course;