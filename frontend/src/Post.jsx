import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post(props) {

  return (
    <Card className="m-2" style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.post.create_time}
        </Card.Subtitle>
        <Card.Text>{props.post.content}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          -{props.post.sender}
        </Card.Subtitle>
        <Button variant="danger" onClick={() => props.delete(props.post)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
