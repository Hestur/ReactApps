import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-date-picker';
import { threadId } from "worker_threads";

export default class EditJoke extends Component {
  constructor(props) {
    super(props);

    this.onChangeJokeHeading = this.onChangeJokeHeading.bind(this);
    this.onChangeJokeContent = this.onChangeJokeContent.bind(this);
    this.onChangeJokeStars = this.onChangeJokeStars.bind(this);
    this.onChangeJokeCompleted = this.onChangeJokeCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Joke_Heading: "",
      Joke_Content: "",
      Joke_Stars: "",
      Joke_Date: new Date(),
      Joke_completeted: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Jokes/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          Joke_Heading: response.data.Joke_Heading,
          Joke_Content: response.data.Joke_Content,
          Joke_Stars: response.data.Joke_Stars,
          Joke_Date: response.data.Joke_Date,
          Joke_completed: response.data.Joke_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeJokeHeading(e) {
    this.setState({
      Joke_Heading: e.target.value
    });
  }

  onChangeJokeContent(e) {
    this.setState({
      Joke_Content: e.target.value
    });
  }

  onChangeJokeStars(e) {
    this.setState({
      Joke_Stars: e.target.value
    });
  }

  onChangeJokeCompleted(e) {
    this.setState({
      Joke_completed: !this.state.Joke_completed
    });
  }
  onChangeJokeDate(e){
    this.setState({
      Joke_Date: new Date().toLocaleString()
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Joke_Heading: this.state.Joke_Heading,
      Joke_Content: this.state.Joke_Content,
      Joke_Stars: this.state.Joke_Stars,
      Joke_Date: this.state.Joke_Date,
      Joke_completed: this.state.Joke_completed
    };
    console.log(obj)
    axios
      .put(
        "http://localhost:4000/Jokes/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

     this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update Joke</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Heading: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Joke_Heading}
              onChange={this.onChangeJokeHeading}
            />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Joke_Content}
              onChange={this.onChangeJokeContent}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="StarsLow"
                value="Low"
                checked={this.state.Joke_Stars === "Low"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="StarsMedium"
                value="Medium"
                checked={this.state.Joke_Stars === "Medium"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="StarsHigh"
                value="High"
                checked={this.state.Joke_Stars === "High"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">High</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangeJokeCompleted}
                checked={this.state.Joke_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
            <div className="form-group">
              <DatePicker
              onChange={this.onChangeJokeDate} value={this.state.date} />
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Joke"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
