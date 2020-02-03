import React, { Component } from "react";
import axios from "axios";

export default class EditPost extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:3000/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          post_title: response.data.post_title,
          post_description: response.data.post_description,
          post_text: response.data.post_text,
          file: response.data.file
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
  uploadSingleFile(e) {
    this.setState({
        file: URL.createObjectURL(e.target.files[0])
    })
}

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      post_title: this.state.post_title,
      post_description: this.state.post_description,
      post_text: this.state.post_text,
      file: this.state.file
    };
    console.log(obj+' ...obj')
    axios
      .put(
        "http://localhost:3000/posts/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

     this.props.history.push("/");
  }

  render() {
    let imgPreview;
    if (this.state.file) {
        imgPreview = <img src={this.state.file} alt='' />;
    }
    return (
      <div>
        <h3>Update Post</h3>
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
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="textarea"
                name="textarea"
                id="text"
                value={this.state.post_text}
                onChange={this.onChangePostText}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Post"
                className="btn btn-primary"
              />
            </div>
          </div>
          <div className="form-group preview">
                    {imgPreview}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Upload</button>
        </form>
      </div>
    );
  }
}
