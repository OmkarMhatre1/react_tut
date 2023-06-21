import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu=()=> {
    return(

        <ListGroup>
            {/* <Link tag="a" href="/" action>Home</Link>
            <Link tag="a" href="/add-course" action>Add Course</Link>
            <Link tag="a" href="/view-course" action>View Courses</Link>
            <Link tag="a" href="#!" action>About</Link>
            <Link tag="a" href="#!" action>Contact</Link> */}
             <a className="list-group-item list-group-item-action" href="/">Home</a>
             <a className="list-group-item list-group-item-action" href="/add-course">Add Course</a>
             <a className="list-group-item list-group-item-action" href="/view-course">View Courses</a>
             <a className="list-group-item list-group-item-action" href="/about">About</a>
             <a className="list-group-item list-group-item-action" href="/contact">Contact</a>
        </ListGroup>

    );
};

export default Menu;