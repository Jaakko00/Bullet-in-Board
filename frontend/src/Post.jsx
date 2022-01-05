import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post(props) {
  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>{props.create_time}</Card.Subtitle>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
