import React from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../redux/actions/index.js'
// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
    const [estado, setEstado] = React.useState({
        name: "",
        region: "",
        words: "",
    })

const onChange = (e) => setEstado ({
    ...estado,
    [e.target.name]: e.target.value
    }
)

const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createHouse(estado))
}

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name: </label>
            <input type="text" name='name' onChange={onChange} />
            <label htmlFor="">Region: </label>
            <input type="text" name='region' onChange={onChange} />
            <label htmlFor="">Words: </label>
            <input type="text" name='words' onChange={onChange} />
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateHouse;
