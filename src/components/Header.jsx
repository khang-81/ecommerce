import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";

function Header({ navigationItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCounter] = useContext(Context);
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-5">
                {/* Logo */}
                <NavLink to="/">
                    <img src="/logo-min.png" className="h-10" alt="Logo" width={145} height={40} />
                </NavLink>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-gray-700 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation */}
                <nav className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block mt-4" : "hidden lg:block"}`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-700 font-medium">
                        <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
                        {navigationItems.map((item) => (
                            <li key={item}>
                                <NavLink to={`/${item.toLowerCase()}`} className="hover:text-blue-500">
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                        <li><NavLink to="/about" className="hover:text-blue-500">About</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink></li>
                        <li><NavLink to="/news" className="hover:text-blue-500">News</NavLink></li>
                        <li className="lg:hidden">
                            <NavLink to="/cart" className="hover:text-blue-500">Cart</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="hidden lg:flex items-center space-x-4 relative">
                    <NavLink to="#" className="hover:text-blue-500">🔍</NavLink>

                    {/* User dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="hover:text-blue-500 focus:outline-none"
                        >
                            👤
                        </button>
                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md text-sm z-50">
                                <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</NavLink>
                                <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Cart */}
                    <NavLink to="/cart" className="relative hover:text-blue-500">
                        🛒
                        {cartCounter > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full px-1">
                                {cartCounter}
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
