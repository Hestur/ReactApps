import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.onChangeProduktNavn = this.onChangeProduktNavn.bind(this);
    this.onChangeProduktBeskrivelse = this.onChangeProduktBeskrivelse.bind(this);
    this.onChangeProduktPris = this.onChangeTodoPriority.bind(this);
    this.onChangeProduktFoto = this.onChangeProduktFoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      produkt_navn: "",
      produkt_beskrivelse: "",
      produkt_pris: "",
      selectedFile: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4010/produkts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          produkt_navn: response.data.produkt_navn,
          produkt_beskrivelse: response.data.produkt_beskrivelse,
          produkt_pris: response.data.produkt_pris,
          selectedFile: response.data.selectedFile
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeProduktNavn(e) {
    this.setState({
      produkt_navn: e.target.value
    });
  }

  onChangeProduktBeskrivelse(e) {
    this.setState({
      produkt_beskrivelse: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      produkt_pris: e.target.value
    });
  }

  onChangeProduktFoto = e => {
    this.setState({
      selectedFile: e.target.files
    });
  };

  onClickHandlerFoto = () => {
    const data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", this.state.selectedFile[x]);
    }
    axios
      .post("http://localhost:4010/produkts/add", data, {
        // receive two    parameter endpoint url ,form data
      })

      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
    };

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      produkt_navn: this.state.produkt_navn,
      produkt_beskrivelse: this.state.produkt_beskrivelse,
      produkt_pris: this.state.produkt_pris,
      selectedFile: this.state.selectedFile
    };
    console.log(obj)
    axios
      .put(
        "http://localhost:4010/produkts/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

     this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update Produkt Navn</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.produkt_navn}
              onChange={this.onChangeProduktNavn}
            />
          </div>
          <div className="form-group">
            <label>Beskrivelse </label>
            <input
              type="text"
              className="form-control"
              value={this.state.produkt_beskrivelse}
              onChange={this.onChangeProduktBeskrivelse}
            />
          </div>
          <div className="form-group">
            <label>Pris: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.produkt_pris}
              onChange={this.onChangeProduktPris}
            />
          </div>
          <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload nyt billede</label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={this.onChangeProduktFoto}
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.onClickHandlerFoto}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
            
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Todo"
                className="btn btn-primary"
              />
            </div>
        </form>
      </div>
    );
  }
}
