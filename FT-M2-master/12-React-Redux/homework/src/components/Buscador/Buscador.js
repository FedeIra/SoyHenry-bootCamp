import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { getMovies, addMovieFavorite } from "../../actions/index";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({ title: "" }); /* con esto reseteamos el buscador */
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}> {movie.Title}</Link>
                <button
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  Add to Fav!
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

//Me traigo las propiedades de store:
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

//Me traigo las acciones de actions:
function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
// export default connect(mapStateToProps, {getMovies, addMovieFavorite})(Buscador);
