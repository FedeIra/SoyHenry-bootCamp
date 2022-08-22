import React from 'react'
import {getProductDetail} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = ({match}) => {
    let dispatch=useDispatch();
    let params=match.params.id
    let products=useSelector(state => state.products)
    React.useEffect(()=>{
    dispatch(getProductDetail(params))
    },[])
    return (
    <div>
        {products?
        (<div>
            {products.id}
            {products.name}
            {products.price}
            {products.description}
            {products.stock}
        </div>): null
        }
    </div>)
}

export default ProductDetail;
