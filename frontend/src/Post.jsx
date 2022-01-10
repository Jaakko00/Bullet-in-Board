import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post(props) {
    
  return (
    <Card
      bg={props.post.color}
      text="white"
      className="m-2"
      style={{ width: "30rem" }}
    >
      <Card.Body>
        <Card.Title className="lead">{props.post.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-light">
          {props.post.create_time}
        </Card.Subtitle>
        <Card.Text className="text-white">{props.post.content}</Card.Text>
        <Card.Subtitle className="mb-2 text-light">
          {props.post.sender && "-" + props.post.sender}
          {!props.post.sender && "-Anonymous"}
        </Card.Subtitle>
        <Button variant="dark" color="white" onClick={() => props.delete(props.post)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
    
  );
}

export default Post;
