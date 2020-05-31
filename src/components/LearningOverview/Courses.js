import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";

const Courses = ()=>{
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>COURSES</CardHeader>
      <CardImg src="" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Curated courses just for you.</p>
        <Button>TAKE COURSE</Button>
      </CardBody>
      <CardFooter>View Progress</CardFooter>
    </Card>
  );
}
export default Courses;