import React from "react";

const SubHeader = ({}) => {
  return (
    <div>
      <li className="relative group">
        <button className="flex items-center px-4 py-2 hover:text-white">
          <img
            src="https://www.bugbountyhunter.com/assets/img/question-mark2.png"
            alt="Getting Started"
            className="w-15 mr-2"
          />
          Getting started
          <i className="fas fa-chevron-down ml-2"></i>
        </button>
        <div className="absolute left-0 hidden group-hover:block bg-gray-800 text-white w-64 shadow-lg">
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-700">
            <img
              src="https://www.bugbountyhunter.com/assets/img/vulnerability2.png"
              alt="Learn about vulnerability types"
              className="w-10 mr-3"
            />
            Learn about vulnerability types
          </a>
          <a
            href="https://www.bugbountyhunter.com/getting-started"
            className="flex items-center px-4 py-3 hover:bg-gray-700"
          >
            <img
              src="https://www.bugbountyhunter.com/assets/img/start-up.png"
              alt="Getting started in bug bounties"
              className="w-10 mr-3"
            />
            Getting started in bug bounties
          </a>
        </div>
      </li>
    </div>
  );
};

export default SubHeader;
