import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    // { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map((item) => (
                    <li className="navbar-item" key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `navbar-link${isActive ? " active" : ""}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
