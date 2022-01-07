import React, { useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";
var filter = require("leo-profanity");

function PostForm(props) {
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeContent = (e) => {
    setContent(e.currentTarget.value);
  };
  const onChangeSender = (e) => {
    setSender(e.currentTarget.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-2">
        New post
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "35rem" }} scroll={true}  backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New post</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Form className="m-2" style={{ width: "10rem" }}>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Title"
              value={title}
              onChange={onChangeTitle}
            />
          </Form>

          <Form className="m-2" style={{ width: "30rem" }}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Text"
              value={content}
              onChange={onChangeContent}
            />
          </Form>

          <Form className="m-2" style={{ width: "10rem" }}>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="From"
              value={sender}
              onChange={onChangeSender}
            />
          </Form>

          <Button
            className="m-2"
            variant="primary"
            type="submit"
            onClick={() =>
              props.post(
                filter.clean(content),
                filter.clean(sender),
                filter.clean(title)
              )
              
            }
          >
            Submit
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PostForm;
