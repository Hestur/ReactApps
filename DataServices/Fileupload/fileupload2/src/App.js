import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      selectedFile: null
    };
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
        console.log(res.statusText);
      });
  };


  maxSelectFile=(event)=>{
    let files = event.target.files // create file object
        if (files.length > 3) { 
           const msg = 'Only 3 images can be uploaded at a time'
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

  checkMimeType=(event)=>{
    //getting file object
    let files = event.target.files 
    //define message container
    let err = ''
    // list allow mime type
   const types = ['image/png', 'image/jpeg', 'image/gif']
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container   
         err += files[x].type+' is not a supported format\n';
       }
     };
  
   if (err !== '') { // if message not same old that mean has error 
        event.target.value = null // discard selected file
        console.log(err)
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
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload file</label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={this.onChangeHandler}
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
