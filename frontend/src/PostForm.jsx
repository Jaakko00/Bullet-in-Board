import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
var filter = require("leo-profanity");

function PostForm(props) {


  const [content, setContent] = useState("");

  const onChange = (e) => {
    setContent(e.currentTarget.value);
  };
  return (
    <Form className="m-2" style={{ width: "30rem" }}>
      <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
        <Form.Label>New post</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Text"
          value={content}
          onChange={onChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() => props.post(filter.clean(content))}
      >
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
