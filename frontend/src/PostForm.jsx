import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function PostForm(props) {

  const [content, setContent] = useState("Text");

  const onChange = (e) => {
    setContent(e.currentTarget.value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New post</Form.Label>
        <Form.Control type="text" value={content} onChange={onChange} />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() => props.post(content)}
      >
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
