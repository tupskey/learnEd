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

 const Audio = ()=>{
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>AUDIO</CardHeader>
      <CardImg src="" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Curated Audios just for you.</p>
        <Button>LISTEN TO AUDIO</Button>
      </CardBody>
      <CardFooter>Resume Tutorial</CardFooter>
    </Card>
  );
}
export default Audio;
