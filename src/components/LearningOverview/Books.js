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

 const Books = ()=>{
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>BOOKS</CardHeader>
      <CardImg src="" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Curated books just for you.</p>
        <Button>READ A BOOK</Button>
      </CardBody>
      <CardFooter>Start Tutorial</CardFooter>
    </Card>
  );
}
export default Books;