import React, { Component } from "react";
import DatePicker from 'react-date-picker';
import axios from 'axios';


export default class CreateJoke extends Component {
  constructor(props) {
    super(props);

    this.onChangeJokeHeading = this.onChangeJokeHeading.bind(this);
    this.onChangeJokeContent = this.onChangeJokeContent.bind(this);
    this.onChangeJokeStars = this.onChangeJokeStars.bind(this);
    this.onChangeJokeDate = this.onChangeJokeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Joke_Heading: "",
      Joke_Content: "",
      Joke_Stars: "",
      Joke_Date: new Date(),
      Joke_completeted: false
    };
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
  onChangeJokeDate(date) {
    this.setState({
      Joke_Date: new Date(date)
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Joke Heading: ${this.state.Joke_Heading}`);
    console.log(`Joke Content: ${this.state.Joke_Content}`);
    console.log(`Joke Date: ${this.state.Joke_Date}`);
    console.log(`Joke Stars: ${this.state.Joke_Stars}`);
    console.log(`Joke Completed: ${this.state.Joke_completed}`);

    const newJoke = {
      Joke_Heading: this.state.Joke_Heading,
      Joke_Content: this.state.Joke_Content,
      Joke_Stars: this.state.Joke_Stars,
      Joke_Date: this.state.Joke_Date,
      Joke_completed: this.state.Joke_completed
    }

    axios.post('http://localhost:4000/joke/add', newJoke)
    .then(res =>{
      console.log(res.data)
    });
    
    this.props.history.push("/");

    this.setState({
      Joke_Heading: "",
      Joke_Content: "",
      Joke_Stars: "",
      Joke_Date: "",
      Joke_completeted: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Joke</h3>
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
                id="Stars1"
                value="1"
                checked={this.state.Joke_Stars === "1"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">1 star</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="Stars2"
                value="2"
                checked={this.state.Joke_Stars === "2"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">2 stars</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="Stars3"
                value="3"
                checked={this.state.Joke_Stars === "3"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">3 stars</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="Stars4"
                value="4"
                checked={this.state.Joke_Stars === "4"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">4 stars</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="StarsOptions"
                id="Stars5"
                value="5"
                checked={this.state.Joke_Stars === "5"}
                onChange={this.onChangeJokeStars}
              />
              <label className="form-check-label">5 stars</label>
            </div>

            <div className="form-group">
              <DatePicker
              onChange={this.onChangeJokeDate} value={this.state.date} />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Joke"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
