import React from 'react';
import { getHouse } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => { 
    const dispatch = useDispatch()
    React.useEffect (() => {
        dispatch(getHouse(props.id))
    }, [dispatch])

    const house = useSelector(state => state.houses)
    
    return (
        <div>
                <h4>name: {house.name}</h4>
                <h4>words: {house.words}</h4>
            
            {house.characters && house.characters.map ( h => {
                return (
                <CharacterCard 
                id={h.id}
                fullName={h.fullName}
                imageUrl={h.imageUrl}
                title={h.title}
                family={h.family}
                /> 
                )
                })} 
        </div>
    );
};

export default HouseDetail;
