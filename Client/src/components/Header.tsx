import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-red-400 text-white py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-400">
                홈
              </a>
            </li>
            <li>
              <a href="#calendar" className="hover:text-gray-400">
                달력
              </a>
            </li>
            <li>
              <a href="#todo" className="hover:text-gray-400">
                할 일
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
