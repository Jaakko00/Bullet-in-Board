import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import PostForm from "./PostForm";


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

  async addNewPost(text, sender) {
    console.log("Adding");
    let newPost = {
      content: text,
      create_time: new Date().toISOString().slice(0, 10),
      sender: sender
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

  async deletePost(post) {
    axios
      .delete(`http://localhost:8080/posts/${post.id}`)
      .then((response) => {
        this.setState({posts: this.state.posts.filter(postToStay => postToStay.id !== post.id)});
        console.log(this.state.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let sortedPosts = this.state.posts.sort((a, b) => b.id - a.id);
    let posts = sortedPosts.map((post) => (
      <Post
        key={post.id}
        post={post}
        delete={this.deletePost}
      ></Post>
    ));
    return (
      <>
        <PostForm post={this.addNewPost} ></PostForm>
        {posts}
      </>
    );
  }
}

export default Posts;
