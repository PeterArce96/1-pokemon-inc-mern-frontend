import axios from 'axios';
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
    
    const [pokemons, setPokemons] = useState([]);

    const navigate = useNavigate();

    const createPokemon = async (pokemon) => {
        try {
            const form = new FormData();
            for (const key in pokemon) {
            form.append(key, pokemon[key]);
            }
            const options = {
                method: 'POST',
                heders: {
                'Content-Type': 'multipart/form-data'
                },
            data: form,
            url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}`
            };
            const { data } = await axios(options);
            setPokemons([...pokemons, data]);
            navigate('/pokemons');
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const readPokemons = async () => {
        try {
            const options = {
                method: 'GET',
                url: `${process.env.REACT_APP_POKEMON_INC_MERN_API_URL}`
            };
            const { data } = await axios(options);
            setPokemons(data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    };
        useEffect(() => {
            readPokemons();
        }, []);

    return (
    <PokemonsContext.Provider
        value={{
            pokemons,
            setPokemons,
            createPokemon
        }}
    >
        {children}
    </PokemonsContext.Provider>
    );
};
