import React from "react";
import axios from "axios";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Post = (
  { loading, post, fetchPost } /* todas sus propiedades vienen de connect */
) => (
  <div>
    <input name="id" />
    <button
      onClick={(e) => {
        e.preventDefault();
        const value =
          document.querySelector(
            "input"
          ).value; /* onclick dice que cuando le des click a get tome el valor que se guardó en input. Ponga en value este valor y ejecuta la función fetchPost pasandole como parámetro este value.
          La función fetchPost es: store.dispatch(fetchPost(value))
          Primero se resuelve la parte de fetchPost(value) */
        fetchPost(value);
      }}
    >
      get
    </button>
    <div>{loading ? "loading..." : post.title}</div>{" "}
    {/* si está cargando, muestra "loading...", si no, muestra el título */}
  </div>
);

function mapStateToProps(state) {
  return {
    post: state.post /* {post: store.getState().post} Post arranca como objeto vacío*/,
    loading:
      state.loading /* {loading: store.getState().loading} Loading arranca como false.*/,
  };
} /* Estas propiedades (post y loading) están definidas en el reducer:
const initialState = {
  count: 0,
  loading: false,
  post: {},
} */

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
