import React, { Component } from "react";
import axios from 'axios'

class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    
    const ApiKey = '?api-key=a97743b3-7b55-4c13-97c3-9445577a4bd9'
    axios.get('https://content.guardianapis.com/search'+ApiKey)
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.response.results
      })
    })
  }
  render() {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
          <div className="card-content">
          <span className="card-title"><h5>{post.pillarName}</h5></span>
            <span className="card-title">{post.webTitle}</span>
            <p><a href={post.apiUrl} alt="link to url"> Link</a></p>
            <p>Published at: {post.webPublicationDate}</p>
          </div>
          </div>
        )
      })
    ) : (
      <div className="center">NO posts yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
          {postList}
      </div>
    );
  }
}
export default Home;
