import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import {getAllProducts} from '../../redux/actions'
import mainImage from '../../img-cp2/main-image-cp2.jpg';

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount(){
    this.props.getAllProducts()
  }
  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img width='300px' src={mainImage} alt="main-img"/>
        <h3>Products</h3>
        {/* <span className='contenedor'> */}
        {this.props.products && this.props.products.map((product) => {
          return <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            stock={product.stock}
            image={product.image}
          />})
        }
        {/* </span> */}
      </div>
      )
  }
}

export function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
