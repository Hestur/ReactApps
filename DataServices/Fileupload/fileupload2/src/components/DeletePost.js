import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeletePost extends React.Component {
    constructor(props) {
        super(props);
        this.DeletePost = this.DeletePost.bind(this);
    }
    DeletePost() {
        axios.delete('http://localhost:3000/posts/delete/' + this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.history.back()
    }
render(){
    return(
        <div>
            <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
            <button onClick={this.DeletePost} className="btn btn-danger">Delete</button>
            </div>
    )
}
}


