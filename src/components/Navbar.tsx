import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (<>
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-xl font-bold text-blue-600">MyApp</NavLink>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
                        <NavLink to="/props" className="text-gray-700 hover:text-blue-600">Props</NavLink>
                        <NavLink to="/conditional" className="text-gray-700 hover:text-blue-600">Conditional</NavLink>
                        <NavLink to="/modal" className="text-gray-700 hover:text-blue-600">Modal</NavLink>
                        <NavLink to="/table" className="text-gray-700 hover:text-blue-600">DataTable</NavLink>
                        <NavLink to="/checkbox" className="text-gray-700 hover:text-blue-600">CheckBox</NavLink>
                        <NavLink to="/clock" className="text-gray-700 hover:text-blue-600">ClockColorChanging</NavLink>
                        <NavLink to="/nested" className="text-gray-700 hover:text-blue-600">NestedRoutes</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        {/* <Outlet /> */}
    </>
    )
}

export default Navbar;