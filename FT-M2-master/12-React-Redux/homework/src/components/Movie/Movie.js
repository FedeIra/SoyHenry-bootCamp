import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetail(id);
  }

  render() {
    return this.props.movie ? (
      <div className="movie-detail">
        Detalle de la pelicula
        <h1> {`Title: ${this.props.movie.Title}`}</h1>
        <img alt="img-movie" src={this.props.movie.Poster} />
        <h4> {`Year: ${this.props.movie.Year}`}</h4>
        <h4> {`Type: ${this.props.movie.Type}`}</h4>
        <h4> {`Rated: ${this.props.movie.Rated}`}</h4>
        <h4> {`Released: ${this.props.movie.Released}`}</h4>
        <h4> {`Runtime: ${this.props.movie.Runtime}`}</h4>
        <h4> {`Genre: ${this.props.movie.Genre}`}</h4>
      </div>
    ) : (
      <div> Loading...</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
