import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import PostForm from "./PostForm";
import { Button } from "react-bootstrap";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    this.addNewPost = this.addNewPost.bind(this);
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

  async addNewPost(text) {
    console.log("Adding");
    let newPost = {
      content: text,
      create_time: new Date().toISOString().slice(0, 10),
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
        <PostForm post={this.addNewPost}></PostForm>
        {posts}
      </>
    );
  }
}

export default Posts;
