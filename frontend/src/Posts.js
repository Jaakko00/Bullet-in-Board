import "./App.css";
import React from "react";
import axios from "axios";

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
      <h1 key={post.id}>{post.content}</h1>
    ));
    return <>{posts}</>;
  }
}

export default Posts;
