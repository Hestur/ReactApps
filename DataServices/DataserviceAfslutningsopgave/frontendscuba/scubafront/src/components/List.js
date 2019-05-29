import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Produkt = props => (
  <tr>
    <td>
      {props.produkt.produkt_navn}
    </td>
    <td>
      {props.produkt.produkt_beskrivelse}
    </td>
    <td>
      {props.produkt.produkt_pris}
    </td>
    <td>
      {props.produkt.produkt_foto}
    </td>
    <td>
      <Link to={"/edit/" + props.produkt._id}>Edit</Link>
      <Link to={"/delete/" + props.produkt._id}>Delete</Link>
    </td>
  </tr>
);

export default class ProduktsList extends Component {
  constructor(props) {
    super(props);
    this.state = { produkts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4010/produkts/")
      .then(response => {
        this.setState({ produkts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  produktList() {
    return this.state.produkts.map(function(currentProdukt, i) {
      return <Produkt produkt={currentProdukt} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Produkt Liste</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Navn</th>
              <th>Beskrivelse</th>
              <th>Pris</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>{this.produktList()}</tbody>
        </table>
      </div>
    );
  }
}
