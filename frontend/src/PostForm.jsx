import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function PostForm(props) {

  const [content, setContent] = useState("Text");
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New post</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
