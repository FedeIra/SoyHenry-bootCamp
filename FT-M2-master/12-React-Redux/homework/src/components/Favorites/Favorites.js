import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import "./Favorites.css";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from "react-router-dom";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favorites &&
            this.props.favorites.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.moviesFavourites,
  };
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
