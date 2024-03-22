import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="container mx-auto w-full md:max-w-4xl bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="h-12" />
            </div>
          </NavLink>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <ul className="flex space-x-4 text-gray-800">
              <li className="py-2">
                <NavLink
                  to="/projects"
                  onClick={closeMenu} // Close menu when NavLink is clicked
                  className="hover:text-green-500"
                >
                  Projects
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/videos"
                  onClick={closeMenu} // Close menu when NavLink is clicked
                  className="hover:text-green-500"
                >
                  Videos
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/blog"
                  onClick={closeMenu} // Close menu when NavLink is clicked
                  className="hover:text-green-500"
                >
                  Blog
                </NavLink>
              </li>

              {/* Add other menu items */}
            </ul>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 6L18 18M6 18L18 6L6 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="mt-3 h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="15" width="24" height="2" rx="1" fill="#FF6347" />
                  <rect y="5" width="24" height="2" rx="1" fill="#32CD32" />
                  <rect y="10" width="24" height="2" rx="1" fill="#4169E1" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden bg-gray-800 fixed inset-y-0 right-0 z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0 w-2/3" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end pt-4 pr-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 6L18 18M6 18L18 6L6 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul className="text-white text-lg mt-8 ml-4">
          <li className="py-2">
            <NavLink
              to="/projects"
              onClick={closeMenu} // Close menu when NavLink is clicked
              className="hover:text-green-500 font-bold"
              activeClassName="text-green-500"
            >
              Projects
            </NavLink>
          </li>
          {/* Add other menu items */}

          <li>
            <NavLink
              to="/videos"
              onClick={closeMenu} // Close menu when NavLink is clicked
              className="hover:text-green-500"
            >
              Videos
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/blog"
              onClick={closeMenu} // Close menu when NavLink is clicked
              className="hover:text-green-500"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
