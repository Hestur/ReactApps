import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css';
import Like from "./Like";

export const  Post = props => (
  <div className="post" style={{display: 'block'}}>

    <h1>{props.post.post_title}</h1>

    <p>{props.post.post_description}</p>


    <div className="shorttext">Textpreview(20 ch):<br/>{props.post.post_text}</div>
 
   <img src="http://via.placeholder.com/200x200"/>
   <br/>
      <Link to={"/edit/" + props.post._id}>Ret |</Link>
      <Link to={"/delete/" + props.post._id}> Delete  |</Link>
    <Link to={"/vis/" + props.post._id}> Vis</Link>
    <Like/>
  </div>
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
      <div className="grid">
       {this.postList()}
      </div>
    );
  }
}
