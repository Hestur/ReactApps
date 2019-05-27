import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const Feedback = props => (
  <tr>
    <td>
      {props.Feedback.feedback_Heading}
    </td>
    <td>
      {props.Feedback.feedback_Navn}
    </td>
    <td>
      {props.Feedback.feedback_Comment}
    </td>
    <td>
      {props.Feedback.feedback_Stars}
    </td>
    <td>
      {props.Feedback.feedback_Date}
    </td>
    <td>
      {props.Feedback.feedback_Mail}
    </td>

    <td>
      <Link to={"/edit/" + props.Feedback._id}>Ret</Link>
      <br/>
      <Link to={"/delete/" + props.Feedback._id}>Delete</Link>
    </td>
  </tr>
);

export default class FeedbacksList extends Component {
  constructor(props) {
    super(props);
    this.state = { Feedbacks: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Feedback")
      .then(response => {
        this.setState({ Feedbacks: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  FeedbacksList() {
    return this.state.Feedbacks.map(function(currentFeedback, i) {
      return <Feedback Feedback={currentFeedback} key={i} />;
    });
  }

  render() {
    return (
      <div className="feedback">
        <h3>Feedback List</h3>
        <table className="table">
          <thead className="thead">
            <tr className="tr">
            <th className="th">Heading</th>
              <th className="th">Navn</th>
              <th className="th">Comment</th>
              <th className="th">Stars</th>
              <th className="th">Date</th>
              <th className="th">Mail</th>
            </tr>
          </thead>
          <tbody>{this.FeedbacksList()}</tbody>
        </table>
      </div>
    );
  }
}
