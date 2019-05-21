import React, { Component } from "react";
import axios from "axios";
import DateJoke from "./DateJoke";

export default class Createjoke extends Component {
  constructor(props) {
    super(props);

    this.onChangejokeHeading = this.onChangejokeHeading.bind(this);
    this.onChangejokeContent = this.onChangejokeContent.bind(this);
    this.onChangejokeStars = this.onChangejokeStars.bind(this);
    this.onChangejokeDate = this.onChangejokeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      joke_Heading: "",
      joke_Content: "",
      joke_Stars: "",
      joke_Date: new Date(),
      joke_completeted: false
    };
  }
  onChangejokeHeading(e) {
    this.setState({
      joke_Heading: e.target.value
    });
  }
  onChangejokeContent(e) {
    this.setState({
      joke_Content: e.target.value
    });
  }
  onChangejokeStars(e) {
    this.setState({
      joke_Stars: e.target.value
    });
  }
  onChangejokeDate(date) {
    this.setState({
      joke_Date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`joke Heading: ${this.state.joke_Heading}`);
    console.log(`joke Content: ${this.state.joke_Content}`);
    console.log(`joke Date: ${this.state.joke_Date}`);
    console.log(`joke Stars: ${this.state.joke_Stars}`);
    console.log(`joke Completed: ${this.state.joke_completed}`);
    console.log(this.state.joke_Date + "gg");
    const newjoke = {
      joke_Heading: this.state.joke_Heading,
      joke_Content: this.state.joke_Content,
      joke_Stars: this.state.joke_Stars,
      joke_Date: this.state.joke_Date,
      joke_completed: this.state.joke_completed
    };

    axios.post("http://localhost:4000/joke/add", newjoke).then(res => {
      console.log(res.data);
    });

    this.props.history.push("/");

    this.setState({
      joke_Heading: "",
      joke_Content: "",
      joke_Stars: "",
      joke_Date: "",
      joke_completeted: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New joke</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Heading: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.joke_Heading}
              onChange={this.onChangejokeHeading}
            />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.joke_Content}
              onChange={this.onChangejokeContent}
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
                checked={this.state.joke_Stars === "1"}
                onChange={this.onChangejokeStars}
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
                checked={this.state.joke_Stars === "2"}
                onChange={this.onChangejokeStars}
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
                checked={this.state.joke_Stars === "3"}
                onChange={this.onChangejokeStars}
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
                checked={this.state.joke_Stars === "4"}
                onChange={this.onChangejokeStars}
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
                checked={this.state.joke_Stars === "5"}
                onChange={this.onChangejokeStars}
              />
              <label className="form-check-label">5 stars</label>
            </div>
          </div>
          <div className="form-group">
            <DateJoke
              value={this.state.date}
              selected={this.state.date}
              handleChange={this.onChangejokeDate}
            />
            <span>Format: DD/MM/YYYY</span>
          </div>
          
          <div className="form-group">
            <input
              type="submit"
              value="Create joke"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
