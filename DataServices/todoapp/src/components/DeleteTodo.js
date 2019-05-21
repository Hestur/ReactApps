import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    deleteTodo() {
        axios.delete('http://localhost:4001/todos/delete/'+this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
render(){
    return(
        <div>
            <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
         
            <button onClick={this.deleteTodo} className="btn btn-danger">Delete</button>
            </div>
    )
}
}


