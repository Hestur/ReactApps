import React, { Component } from 'react';
import axios from 'axios';

class test extends Component {
    state = { 
        selectedFile: null
     }

    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    fileUploadHandler = e => {
        var  fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('http://localhost:3000/', fd)
        .then(res => {
            console.log(res);
        })
    }
    
    render() { 
        return ( <div className="Imgupload">
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload</button>
        </div> );
    }
}
 
export default test;