import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import usePokemons from "../hooks/usePokemons";


const PokemonsLayout = () => {
    const context = usePokemons();
    console.log(context);

    const applicationName = "PokémonInc";

    return (
        <>
        <Header
            applicationName={applicationName}
        />
        <main className="text-center pt-16 pb-8">
            <Outlet />
        </main>
        <footer className="mt-auto text-center">
            ELGS
        </footer>
        </>
    );
}

export default PokemonsLayout;