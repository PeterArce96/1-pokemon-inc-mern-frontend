import { Outlet } from "react-router-dom";

const Pokemons = () => {
    return(
        <>
            <header className="text-center">
                PokemonInc
            </header>
            <main className="text-center">
                <Outlet/>
            </main>
            <footer className="mt-auto text-center">
                ELGS
            </footer>
        </>
    );
};

export default Pokemons;