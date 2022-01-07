import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
var filter = require("leo-profanity");

function PostForm(props) {
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");

  const onChangeContent = (e) => {
    setContent(e.currentTarget.value);
  };
  const onChangeSender = (e) => {
    setSender(e.currentTarget.value);
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
          onChange={onChangeContent}
        />
      </Form.Group>
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="From"
        value={sender}
        onChange={onChangeSender}
      />
      <Button
        variant="primary"
        type="submit"
        onClick={() => props.post(filter.clean(content), filter.clean(sender))}
      >
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
