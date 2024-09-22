import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Menu;