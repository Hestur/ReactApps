import React from "react";
import DatePicker from "react-date-picker";


export default class DateJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke_Date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log(date)
    this.setState({
      joke_Date: date
    });
  }

  render() {
    return (
      <DatePicker
        value = {this.state.joke_Date}
        selected={this.state.date}
        onChange={this.props.handleChange}
      />
    );
  }
}
