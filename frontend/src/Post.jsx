import "./App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post(props) {
  return (
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Button variant="danger">DELETE</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{props.create_time}</Card.Footer>
    </Card>
  );
}

export default Post;
