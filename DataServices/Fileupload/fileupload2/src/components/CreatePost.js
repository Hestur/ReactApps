import React, { Component } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import {Progress} from 'reactstrap';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.onChangePostTitle = this.onChangePostTitle.bind(this);
    this.onChangePostDescription = this.onChangePostDescription.bind(this);
    this.onChangePostText = this.onChangePostText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    
    this.state = {
      post_title: "",
      post_description: "",
      post_text: "",
      selectedFile: null
    };
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
    console.log(`Form submitted:`);
    console.log(`File: ${this.state.selectedFile}`)
    console.log(`Post Title: ${this.state.post_title}`);
    console.log(`Post Description: ${this.state.post_description}`);
    console.log(`Post Text: ${this.state.post_text}`);

    const newPost = {
      post_title: this.state.post_title,
      post_description: this.state.post_description,
      post_text: this.state.post_text,
      selectedFile: this.state.selectedFile
    };

    axios.post("http://localhost:3000/posts/add", newPost).then(res => {
      console.log(res.data);
    });
    this.props.history.push("/");

    this.setState({
      post_title: "",
      post_description: "",
      post_text: "",
      selectedFile: null
    });
  }
  
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", this.state.selectedFile[x]);
    }

    axios
      .post("http://localhost:8000/upload", data, {
        // receive two    parameter endpoint url ,form data
      })

      .then(res => {
        // then print response status
        console.log('gg' + this.state.selectedFile[0].name);
      });
  };


  maxSelectFile=(event)=>{
    let files = event.target.files // create file object
        if (files.length > 10) { 
           const msg = 'Only 10 images can be uploaded at a time'
           event.target.value = null // discard selected file
           console.log(msg)
          return false;
 
      }
    return true;
 
 }


 onChangeHandler=event=>{
  var files = event.target.files
  if(this.maxSelectFile(event)){ 
  // if return true allow to setState
     this.setState({
     selectedFile: files
  })
}
}

checkType = (t) => {
  // list allow mime type
  const types = ['image/png', 'image/jpeg', 'image/gif']
  return types.every(type => t !== type);
}

// Check mimetypes
checkMimeType = (event) => {
  //getting file object
  let files = event.target.files;
  //define message container
  let err = '';

  // loop access array
  for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (this.checkType(files[x].type)) {
          err += files[x].type + ' is not a supported format\n'; // create error message and assign to container 
      }
  };

  if (err !== '') { // if message not same old that mean has error 
      event.target.value = null // discard selected file
      console.log(err);
      alert(err);
      return false;
  }
  return true;
}

  onChangeHandler=event=>{
    var files = event.target.files
    if(this.maxSelectFile(event) && this.checkMimeType(event)){ 
    // if return true allow to setState
       this.setState({
       selectedFile: files
    })
 }
}

  render() {
 
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
          <div className="row">
      	  <div className="offset-md-3 col-md-6">
               <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" multiple onChange={this.onChangeHandler}/>
              </div>  
              <div className="form-group">
              <ToastContainer />
              <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
        
              </div> 
              
              <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

	      </div>
      </div>
        </form>


      </div>
    );
  }
}
