import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:4010/produkts/delete/'+this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            this.props.history.push("/");
            
    }
render(){
    return(
        <div>
            <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
         
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </div>
    )
}
}


