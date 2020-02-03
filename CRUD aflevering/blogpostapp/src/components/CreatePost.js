import React, { Component } from "react";
import axios from "axios";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.uploadSingleFile = this.uploadSingleFile.bind(this)
    this.onChangePostTitle = this.onChangePostTitle.bind(this);
    this.onChangePostDescription = this.onChangePostDescription.bind(this);
    this.onChangePostText = this.onChangePostText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      post_title: "",
      post_description: "",
      post_text: "",
      file: null
    };
  }
  uploadSingleFile(e) {
    this.setState({
        file: URL.createObjectURL(e.target.files[0])
    })
}
  onChangePostTitle(e) {
    this.setState({
      post_title: e.target.value
    });
  }
  onChangePostDescription(e) {
    this.setState({
      post_description: e.target.value
    });
  }
  onChangePostText(e) {
    this.setState({
      post_text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.file);
    console.log(`Form submitted:`);
    console.log(`Post Title: ${this.state.post_title}`);
    console.log(`Post Description: ${this.state.post_description}`);
    console.log(`Post Text: ${this.state.post_text}`);

    const newPost = {
      post_title: this.state.post_title,
      post_description: this.state.post_description,
      post_text: this.state.post_text,
      file: this.state.file
    };

    axios.post("http://localhost:3000/posts/add", newPost).then(res => {
      console.log(res.data);
    });
    this.props.history.push("/");

    this.setState({
      post_title: "",
      post_description: "",
      post_text: "",
      file: null
    });
  }

  render() {
    let imgPreview;
    if (this.state.file) {
        imgPreview = <img src={this.state.file} alt='' />;
    }
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.post_title}
              onChange={this.onChangePostTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.post_description}
              onChange={this.onChangePostDescription}
            />
          </div>
          <div className="form-group">
            <label>Text: </label>

            <input
              className="form-control"
              type="text"
              value={this.state.post_text}
              onChange={this.onChangePostText}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Post"
              className="btn btn-primary"
            />
          </div>
          <div className="form-group preview">
                    {imgPreview}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                </div>
                
        </form>


      </div>
    );
  }
}
