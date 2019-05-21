import React, { Component } from "react";
import axios from "axios";
import DateJoke from "./DateJoke";




export default class Editjoke extends Component {
  constructor(props) {
    super(props);

    this.onChangejokeHeading = this.onChangejokeHeading.bind(this);
    this.onChangejokeContent = this.onChangejokeContent.bind(this);
    this.onChangejokeStars = this.onChangejokeStars.bind(this);
    this.onChangejokeDate = this.onChangejokeDate.bind(this);
    this.onChangejokeCompleted = this.onChangejokeCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      joke_Heading: "",
      joke_Content: "",
      joke_Stars: "",
      joke_Date: new Date(),
      joke_completeted: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/joke/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          joke_Heading: response.data.joke_Heading,
          joke_Content: response.data.joke_Content,
          joke_Stars: response.data.joke_Stars,
          joke_Date: response.data.joke_Date,
          joke_completed: response.data.joke_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  onChangejokeCompleted(e) {
    this.setState({
      joke_completed: !this.state.joke_completed
    });
  }
   onChangejokeDate(date){
     this.setState({
       joke_Date: date
     });
   }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      joke_Heading: this.state.joke_Heading,
      joke_Content: this.state.joke_Content,
      joke_Stars: this.state.joke_Stars,
      joke_Date: this.state.joke_Date,
      joke_completed: this.state.joke_completed
    };
    console.log(obj)
    axios
      .put(
        "http://localhost:4000/joke/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

     this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update joke</h3>
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
                id="StarsLow"
                value="Low"
                checked={this.state.joke_Stars === "Low"}
                onChange={this.onChangejokeStars}
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
                checked={this.state.joke_Stars === "Medium"}
                onChange={this.onChangejokeStars}
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
                checked={this.state.joke_Stars === "High"}
                onChange={this.onChangejokeStars}
              />
              <label className="form-check-label">High</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangejokeCompleted}
                checked={this.state.joke_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
            <div className="form-group">
            
            <DateJoke/>
            <span>Format: DD/MM/YYYY</span>
            </div>


            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update joke"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
