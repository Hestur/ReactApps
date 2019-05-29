import React, { Component } from "react";
import axios from 'axios';

export default class CreateProdukt extends Component {
  constructor(props) {
    super(props);

    this.onChangeProduktNavn = this.onChangeProduktNavn.bind(this);
    this.onChangeProduktBeskrivelse = this.onChangeProduktBeskrivelse.bind(this);
    this.onChangeProduktPris = this.onChangeProduktPris.bind(this);
    this.onChangeProduktFoto = this.onChangeProduktFoto.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      produkt_navn: "",
      produkt_beskrivelse: "",
      produkt_pris: "",
      produkt_foto: "",
      selectedFile: null
    };
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
  onChangeProduktPris(e) {
    this.setState({
      produkt_pris: e.target.value
    });
  }
  onChangeProduktFoto = e => {
    this.setState({
      produkt_foto: e.target.files[0].name, 
      selectedFile: e.target.files[0]
    });
  };

  onClickHandler = () => {
    const data = new FormData();
   
      data.append("file", this.state.selectedFile);
      data.append("produkt", JSON.stringify(this.state));

    
    axios
      .post("http://localhost:4010/produkts/upload", data, {
        // receive two    parameter endpoint url ,form data
      })

      .then(res => {
        // then print response status
        console.log(res.statusText);
        console.log(data, this.state)
      });
    };

  // onSubmit(e) {
  //   e.preventDefault();

  //   console.log(`Form submitted:`);
  //   console.log(`P.navn: ${this.state.produkt_navn}`);
  //   console.log(`P.beskrivelse: ${this.state.produkt_beskrivelse}`);
  //   console.log(`P.pris: ${this.state.produkt_pris}`);
  //   console.log(`P.foto: ${this.state.selectedFile}`);

  //   const newProdukt = {
  //     produkt_navn: this.state.produkt_navn,
  //     produkt_beskrivelse: this.state.produkt_beskrivelse,
  //     produkt_pris: this.state.produkt_pris,
  //     selectedFile: this.state.selectedFile
  //   }

  //   axios.post('http://localhost:4010/produkts/add', newProdukt)
  //   .then(res =>{
  //     console.log(res.data)
  //   });
  //   this.props.history.push("/");

  //   this.setState({
  //     produkt_navn: "",
  //     produkt_beskrivelse: "",
  //     produkt_pris: "",
  //     selectedFile: null,
  //   });
  // }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Produkt</h3>
        <form>
          <div className="form-group">
            <label>Navn: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.produkt_navn}
              onChange={this.onChangeProduktNavn}
            />
          </div>
          <div className="form-group">
            <label>Beskrivelse: </label>
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
              <label>Upload Billede</label>
              <input
                type="file"
                className="form-control"
                onChange={this.onChangeProduktFoto}
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      
         
        </form>
      </div>
    );
  }
}
