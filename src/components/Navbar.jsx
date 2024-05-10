import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-pink-300 p-4 w-full">
            <ul className="flex justify-right space-x-6 mr-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://www.linkedin.com/in/chiaraceriola/" target="_blank">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;