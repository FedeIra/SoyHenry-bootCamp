import React from "react"
import Nav from "./components/Nav/Nav";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <Nav/>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/product/:id'} component={ProductDetail}/>
          <Route path={'/products/create'} component={CreateProduct}/>
      </>
    )
}
export default App;
