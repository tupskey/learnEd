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

 const Videos = ()=> {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>VIDOES</CardHeader>
      <CardImg src="" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Curated videos just for you</p>
        <Button>WATCH TUTORIAL</Button>
      </CardBody>
      <CardFooter>View Tutorial</CardFooter>
    </Card>
  );
}
export default Videos;