import React, { useState } from "react";
import { Button, Form, Offcanvas, Navbar, Container,  } from "react-bootstrap";

var filter = require("leo-profanity");

function PostForm(props) {
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");
  const [title, setTitle] = useState("");



  /** onChangeContent sets the state of content with given value */
  const onChangeContent = (e) => {
    setContent(e.currentTarget.value);
  };

  /** onChangeSender sets the state of content with given value */
  const onChangeSender = (e) => {
    setSender(e.currentTarget.value);
  };

  /** onChangeTitle sets the state of content with given value */
  const onChangeTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#" className="display-1">
            Bulletin board
          </Navbar.Brand>
          <Navbar.Toggle>New post</Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ width: "35rem" }}
            scroll={true}
            backdrop={false}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                New post
              </Offcanvas.Title>
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
                  props
                    .post(
                      //filter.clean filters all profanity of a given string
                      filter.clean(content), 
                      filter.clean(sender),
                      filter.clean(title)
                    )
                    //After posting, the state is emptied to avoid doubleposting
                    .then(setContent(""))
                    .then(setSender(""))
                    .then(setTitle(""))
                }
              >
                Submit
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default PostForm;
