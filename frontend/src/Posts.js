import "./App.css";
import React from "react";
import axios from "axios";
import Post from "./Post";
import { Button } from "react-bootstrap";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
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

  async addNewPost(e) {
    let newPost = {
      id: Math.floor(Math.random() * 100000),
      latitude: e.latlng.lat,
      longitude: e.latlng.lng,
    };
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

  render() {
    let posts = this.state.posts.map((post) => (
      <Post
        key={post.id}
        content={post.content}
        id={post.id}
        create_time={post.create_time}
      ></Post>
    ));
    return (
      <>
        {posts}
        <Button className="m-2">New post</Button>
      </>
    );
  }
}

export default Posts;
