import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    const { current_user, onSignOut } = props;

    const handleSignOutClick = event => {
        event.preventDefault();

        if (typeof onSignOut === "function") {
            onSignOut();
        }
    };
    return (
        <nav>
            <NavLink to="/" > Home </NavLink>
            |
            <NavLink to="/products">Products</NavLink>
            {
                current_user ?
                    <>
                        Hello, {current_user.first_name}
                        <a href="" onClick={handleSignOutClick}>
                            Sign Out
                        </a>
                        <NavLink to="/products/new">New Product</NavLink>
                    </>
                    :
                    <NavLink to="/sign_in">Sign In</NavLink>
            }

        </nav>
    )
}
