import React, { Component } from "react";
import axios from 'axios'

class Home extends Component {
  state = {
    posts: [ ],
    search: 'putin'
  }
  handleChange = (e) => {
    this.setState({
       search: e.target.value,
      })
      
}
handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
   
    
}

  componentDidMount(){
    
    const ApiKey = '&api-key=a97743b3-7b55-4c13-97c3-9445577a4bd9'
    axios.get('https://content.guardianapis.com/search?q=' + '' + ApiKey)
    .then(res => {
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
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Search</h5>
            <div className="input-field">
                <label htmlFor="search"></label>
                <input type="text" id="search" onChange={this.handleChange.bind(this)} />
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Search</button>
            </div>
        </form>
          {postList}
      </div>
    );
  }
}
export default Home;
