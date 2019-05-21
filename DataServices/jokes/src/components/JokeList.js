import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Ret from "../ret.png";

const Joke = props => (
  <tr>
    <td className={props.joke.joke_completed ? "completed" : ""}>
      {props.joke.joke_Heading}
    </td>
    <td className={props.joke.joke_completed ? "completed" : ""}>
      {props.joke.joke_Content}
    </td>
    <td className={props.joke.joke_completed ? "completed" : ""}>
      {props.joke.joke_Stars}
    </td>
    <td className={props.joke.joke_completed ? "completed" : ""}>
      {props.joke.joke_Date}
    </td>

    <td>
      <Link to={"/edit/" + props.joke._id}>
        <img src={Ret} width="30" height="30" alt="hest" />
      </Link>
      <Link to={"/delete/" + props.joke._id}>Delete</Link>
    </td>
  </tr>
);

export default class jokesList extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/joke")
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  jokesList() {
    return this.state.jokes.map(function(currentjoke, i) {
      return <Joke joke={currentjoke} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>joke List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Heading</th>
              <th>Content</th>
              <th>Stars</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.jokesList()}</tbody>
        </table>
      </div>
    );
  }
}
