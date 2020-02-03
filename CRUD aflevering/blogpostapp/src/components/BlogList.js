import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = props => (
  <tr>
    <td>{props.post.post_title}</td>
    <td>{props.post.post_description}</td>
    <td>{props.post.post_text}</td>
    <td>
      <Link to={"/edit/" + props.post._id}>Ret |</Link>
      <Link to={"/delete/" + props.post._id}> Delete</Link>
    </td>
  </tr>
);

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/posts/")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  postList() {
    return this.state.posts.map(function(currentpost, i) {
      return <Post post={currentpost} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>posts List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>title</th>
              <th>description</th>
              <th>text</th>
              <th>pic</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
      </div>
    );
  }
}
