import React, { Component } from 'react';
import axios from 'axios';
import Post from './BlogList';
import CommentBox from './CommentBox';
import Like from './Like';

class Vis extends Component {
   constructor(props) {
    super(props);
    this.state = { post_title: "",
      post_description: "",
      post_text: "",
      selectedFile: null };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          post_title: response.data.post_title,
          post_description: response.data.post_description,
          post_text: response.data.post_text,
          selectedFile: this.state.selectedFile
        });
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
        <h3>Post</h3>
          <div className="form-group">
            <label>Title: </label>
            <p>{this.state.post_title}</p>
          </div>
          <div className="form-group">
            <label>Description: </label>
             <p>{this.state.post_description}</p>
          </div>
          <div className="form-group">
            <label>Text: </label>
             <p>{this.state.post_text}</p>
          </div>
          <div className="form-group">
            <label>img: </label>
             <p>{this.state.selectedFile}</p>
          </div>
          <Like/>
          <CommentBox/>
      </div>
         );
    }
}
 
export default Vis;