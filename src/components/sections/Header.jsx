import { Link, NavLink } from "react-router-dom";

const Header = ({applicationName}) => {
    return(
        <header className="fixed z-80 top-0 left-0 w-full bg-zinc-800 shadow shadow-zinc-500/50">
            <nav className="py-4">
                <div className="flex items-center justify-between container mx-auto px-8 md:px-4">
                    <Link to="">{applicationName}</Link>
                    <NavLink to="/pokemons/create">Crear</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default Header;