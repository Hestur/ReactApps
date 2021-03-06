import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteJoke extends React.Component {
    constructor(props) {
        super(props);
        this.deleteJoke = this.deleteJoke.bind(this);
    }
    deleteJoke() {
        axios.delete('http://localhost:4000/Joke/delete/'+this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.history.back()
    }
render(){
    return(
        <div>
            <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
         
            <button onClick={this.deleteJoke} className="btn btn-danger">Delete</button>
            </div>
    )
}
}


