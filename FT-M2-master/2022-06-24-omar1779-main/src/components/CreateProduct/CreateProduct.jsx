import React from 'react';
import { createProduct } from '../../redux/actions'
import { useDispatch } from 'react-redux'

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
   const [state, setState] = React.useState({
      name: '',
      price: 0,
      description: '',
      stock: 0
   })
   const handleInputChange = (e) => {
      e.preventDefault();
      setState({
         ...state,
         [e.target.name]: e.target.value
      })
      // e.preventDefault();
      // setErrors(validate({
      //   ...state,
      //   [e.target.name]: e.target.value
      // }));
   }
   let dispatch = useDispatch();
   const enviarDatos = (event) => {
      event.preventDefault();
      dispatch(createProduct(state))
      // setState({
      //   name: '',
      //   description: '',
      //   price: 0,
      //   stock: 0
      // })
   }
   return (
      <form onSubmit={enviarDatos}>
      <div>
         <label>Name: </label>
         <input type="text"
            name="name"
            onChange={(e) => handleInputChange(e)} // onChange={(e) => setUsername(e.target.value)}
            value={state.name}/>
      </div>
      <div>
         <label>Price: </label>
         <input type="number"
            name="price"
            onChange={(e) => handleInputChange(e)} // onChange={(e) => setUsername(e.target.value)}
            value={state.price}/>
      </div>
      <div>
         <label>Description: </label>
         <textarea name="description"
         onChange={(e) => handleInputChange(e)}
         value={state.description}></textarea>
      </div>
      <div>
         <label>Stock: </label>
         <input type="number"
            name="stock"
            onChange={(e) => handleInputChange(e)} // onChange={(e) => setUsername(e.target.value)}
            value={state.stock}/>
      </div>
      <button type="submit">Create Product</button>
      </form>
   );
};

export default CreateProduct;
