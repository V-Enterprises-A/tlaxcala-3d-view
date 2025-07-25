import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./Store/slices/pokemon";




export default function PokemonAPP() {
    
    const dispatch = useDispatch();
    const {isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

    useEffect(() => {

        dispatch(getPokemons());

    }, [])



    return (
        <>
            <h1>Poke API</h1>
            <h3>Page{page}</h3>
            <hr />
            <span> Loading perro : { isLoading ? "True": "False" }</span>
            <ul>
                { 
                    pokemons.map( ({name}) => (
                    <li key={name}>{name}</li>
                    ))
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={()=> dispatch( getPokemons(page) ) }
            >
            Next
            </button>
        </>
    )
}
