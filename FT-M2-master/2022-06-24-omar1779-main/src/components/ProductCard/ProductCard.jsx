import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteProduct} from '../../redux/actions'
import { Link } from 'react-router-dom';

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


  const ProductCard = (props) => {
    const dispatch = useDispatch();
            return (
                <div>
                  <Link to={`/product/${props.id}`}>
                  <h3>{props.name}</h3>
                  </Link>
                  <img src={props.image} alt={props.name} />
                  <p>Stock: {props.stock}</p>
                  <p>Precio: ${props.price}</p>
                  <button onClick={()=>{return dispatch(deleteProduct(props.id))}} type="submit">x</button> 
                </div>
            );
  };

export default ProductCard;