import React, { useState } from "react";
import { Button, Form, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
var filter = require("leo-profanity");

function PostForm(props) {
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");
  const [title, setTitle] = useState("");

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
      <Navbar bg="dark" expand="lg" fixed="bottom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default PostForm;
