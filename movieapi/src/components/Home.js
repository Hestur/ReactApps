import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Soeg from "./Soeg";


export default class Home extends Component {
  state = {
    films: [],
    SW: "war"
  };

  InputFromSearch = data => {
   // console.log("data er her:", data);
    this.setState({
      SW: data
    });
  };

  hent = () => {
    const apikey = "3df5fd3f";
    axios
      .get(
        "http://www.omdbapi.com/?s=" +
          this.state.SW +
          "&r=json&apikey=" +
          apikey
      )
      .then(res => {
        if (res.data.Search) {
          this.setState({
            films: res.data.Search
          })
        }
      })
  }


  componentDidMount() {
    this.hent()
  }
  componentDidUpdate() {
    this.hent()
  }

  render() {
    const { films } = this.state;

    const filmsliste = films.length ? (
      films.map(films => {
        return (
          <div className="post card" key={films.imdbID}>
            <div className="card-content">
              <span className="card-title">
                <h5>Title: {films.Title}</h5></span>
              <span className="card-title">Premiere year: {films.Year}</span>
              <img src={films.Poster} alt={"Poster for " + films.Title} />
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">no movies found...</div>
    );

    return (
      <div>
        <h1>Home</h1>
        <Soeg SearchInput={this.InputFromSearch} />

        {filmsliste}
      </div>
    );
  }
}
