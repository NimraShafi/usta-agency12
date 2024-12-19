import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import CursorEffect from './CursorEffect';
import "../Navbar.css";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Custom cursor elements */}
      <div id="cursor"></div>
      <div id="cursor-blur"></div>

   

      <CursorEffect/>
    <nav className="bg-black text-white">
      <div className="flex justify-between items-center py-2 px-6 group">
        <div className="text-2xl font-bold flex items-center">
    <svg 
      className="logo h-6 transition-colors duration-300 text-white " 
      height="24" 
      viewBox="0 0 1220 299" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 18.4226C280.577 18.4226 -6.26934 18.4226 274.308 18.4226V161.846C274.308 237.464 212.772 299 137.154 299C61.5361 299 0 237.464 0 161.846V18.4226Z" fill="currentColor"></path>
      <path d="M831.508 293.888H694.354V153.551H637.544V19.1938H884.846V153.551H831.508V293.888Z" fill="currentColor"></path>
      <path d="M1045.82 0L1219.05 293.502H872.597L1045.82 0Z" fill="currentColor"></path>
      <path d="M559.226 165.125H324.849V293.984H529.036C602.629 293.984 620.28 193.578 559.226 165.125Z" fill="currentColor"></path>
      <path d="M376.257 153.551H591.73V19.1938H385.999C348.383 19.1938 317.808 52.0838 317.808 87.3851C317.808 122.686 340.184 145.256 376.257 153.551Z" fill="currentColor"></path>
    </svg>
  </div>
        <div className="flex gap-4 md:gap-8 items-center">
          <ul className="flex gap-4 md:gap-8 items-center text-lg">
            <li className="nav-item hover"><a title="Go to Let's talk" href="#contacts" className="hover">Lets talk</a></li>
            <li className="nav-item hover"><a title="Go to Job" href="#" className="hover">Job</a></li>
            <li className="nav-item hover"><a title="Go to It" href="/it" className="hover">It</a></li>
          </ul>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="text-lg">
              <FaBars size={22} />
            </button>
            <div className={`absolute right-0 mt-2 w-48 text-white z-50 transition-all duration-500 ease-in-out transform ${dropdownOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
              <ul className={`py-4 ${dropdownOpen ? 'animate-dropdown' : ''}`}>
                <li className={`dropdown-item text-right nav-item ${dropdownOpen ? 'dropdown-item-show' : 'dropdown-item-hide'}`}><a href="#home" className="block px-4 py-2 text-lg">Home</a></li>
                <li className={`dropdown-item text-right nav-item ${dropdownOpen ? 'dropdown-item-show' : 'dropdown-item-hide'}`}><a href="#agency" className="block px-4 py-2 text-lg">Agency</a></li>
                <li className={`dropdown-item text-right nav-item ${dropdownOpen ? 'dropdown-item-show' : 'dropdown-item-hide'}`}><a href="#team" className="block px-4 py-2 text-lg">Team</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
