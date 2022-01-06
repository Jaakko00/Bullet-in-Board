import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post(props) {

  return (
    <Card className="m-2" style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>{props.post.create_time}</Card.Subtitle>
        <Card.Text>
          {props.post.content}
        </Card.Text>
        <Button variant="danger" onClick={() => props.delete(props.post)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
