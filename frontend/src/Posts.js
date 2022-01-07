import "./App.css";
import React from "react";
import axios from "axios";
import Post from "./Post";
import PostForm from "./PostForm";
import { Row, Container, Col } from "react-bootstrap";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    this.addNewPost = this.addNewPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async componentDidMount() {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async addNewPost(text, sender, title) {
    console.log("Adding");
    function randomColor() {
      var randomnumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      if (randomnumber === 1) {
        return "success";
      }
      if (randomnumber === 2) {
        return "danger";
      }
      if (randomnumber === 3) {
        return "warning";
      } else {
        return "info";
      }
    }
    let create_time = new Date().toISOString().slice(0, 10);
    let color = randomColor();
    let newPost = {
      content: text,
      create_time: create_time,
      sender: sender,
      title: title,
      color: color,
    };
    console.log(color);

    axios
      .post("http://localhost:8080/posts", newPost)
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        console.log("Added new post");
        this.setState({ posts: [...this.state.posts, newPost] });
      });
  }

  async deletePost(post) {
    axios
      .delete(`http://localhost:8080/posts/${post.id}`)
      .then((response) => {
        this.setState({
          posts: this.state.posts.filter(
            (postToStay) => postToStay.id !== post.id
          ),
        });
        console.log(this.state.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let sortedPosts = this.state.posts.sort((a, b) => b.id - a.id);
    let posts = sortedPosts.map((post) => (
      <Post key={post.id} post={post} delete={this.deletePost}></Post>
    ));
    return (
      <Container>
        <Row sm="1" md="1" lg="1" xl="2" >
          <Col>
            <PostForm post={this.addNewPost}></PostForm>
          </Col>
          <Col>{posts}</Col>
        </Row>
      </Container>
    );
  }
}

export default Posts;
