import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (

        // navbar section
        <div className="navbar justify-between bg-base-100 w-11/12 mx-auto py-6">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive ? "bg-[#3A4256] text-white" : undefined
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/quizs"
                                className={({ isActive }) =>
                                    isActive ? "bg-[#3A4256] text-white" : undefined
                                }>
                                Quizs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/chart"
                                className={({ isActive }) =>
                                    isActive ? "bg-[#3A4256] text-white" : undefined
                                }>
                                Chart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "bg-[#3A4256] text-white" : undefined
                                }>
                                Blog
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Quiz Zone</Link>
            </div>
            <div className="hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive ? "bg-[#3A4256] text-white" : undefined
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/quizs"
                            className={({ isActive }) =>
                                isActive ? "bg-[#3A4256] text-white" : undefined
                            }>
                            Quizs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/chart"
                            className={({ isActive }) =>
                                isActive ? "bg-[#3A4256] text-white" : undefined
                            }>
                            Chart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "bg-[#3A4256] text-white" : undefined
                            }>
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;