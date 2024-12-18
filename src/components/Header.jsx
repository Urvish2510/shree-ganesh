import React, { useState } from "react";

const Header = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setVisibleDropdown(visibleDropdown === index ? null : index);
  };

  // Dropdown items data
  const dropdownItems = [
    {
      title: "Getting started",
      icon: "https://www.bugbountyhunter.com/assets/img/question-mark2.png",
      links: [
        {
          href: "#",
          icon: "https://www.bugbountyhunter.com/assets/img/vulnerability2.png",
          text: "Learn about vulnerability types",
        },
        {
          href: "https://www.bugbountyhunter.com/getting-started",
          icon: "https://www.bugbountyhunter.com/assets/img/start-up.png",
          text: "Getting started in bug bounties",
        },
      ],
    },
    {
      title: "Test your knowledge",
      icon: "https://www.bugbountyhunter.com/assets/img/computer-code.png",
      links: [
        {
          href: "https://www.bugbountyhunter.com/training",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking.png",
          text: "Free Web Application Challenges",
        },
        {
          href: "https://www.bugbountyhunter.com/membership",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking1.png",
          text: "BugBountyHunter Membership",
        },
      ],
    },
    {
      title: "Test your knowledge",
      icon: "https://www.bugbountyhunter.com/assets/img/computer-code.png",
      links: [
        {
          href: "https://www.bugbountyhunter.com/training",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking.png",
          text: "Free Web Application Challenges",
        },
        {
          href: "https://www.bugbountyhunter.com/membership",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking1.png",
          text: "BugBountyHunter Membership",
        },
      ],
    },
    {
      title: "Test your knowledge",
      icon: "https://www.bugbountyhunter.com/assets/img/computer-code.png",
      links: [
        {
          href: "https://www.bugbountyhunter.com/training",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking.png",
          text: "Free Web Application Challenges",
        },
        {
          href: "https://www.bugbountyhunter.com/membership",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking1.png",
          text: "BugBountyHunter Membership",
        },
      ],
    },
    {
      title: "Test your knowledge",
      icon: "https://www.bugbountyhunter.com/assets/img/computer-code.png",
      links: [
        {
          href: "https://www.bugbountyhunter.com/training",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking.png",
          text: "Free Web Application Challenges",
        },
        {
          href: "https://www.bugbountyhunter.com/membership",
          icon: "https://www.bugbountyhunter.com/assets/img/hacking1.png",
          text: "BugBountyHunter Membership",
        },
      ],
    },
    // Add more dropdowns here as needed
  ];

  return (
    <header className="bg-[#181b1d] m-auto">
      {/* Top Header Section */}
      <div className="w-[80%] container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <a
            href="https://www.bugbountyhunter.com/"
            title="Home"
            className="flex items-center"
          >
            <img
              src="https://www.bugbountyhunter.com/assets/img/newlogo.png"
              alt="Bug Bounty Hunter Logo"
              className="rounded-full shadow-md w-24 h-24 mr-3"
            />
            <h1 className="text-2xl font-bold text-white">
              <span className="text-white">Bug</span>
              <span className="text-teal-500">Bounty</span>
              <span className="text-white">Hunter</span>
            </h1>
          </a>
        </div>
        <div>
          <a
            href="https://www.bugbountyhunter.com/login"
            className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600"
          >
            <i className="fas fa-sign-in-alt mr-2"></i> Access your account
          </a>
        </div>
      </div>
      <hr className="h-px mt-3 border-0 dark:bg-gray-700" />
      
      {/* Navigation */}
      <nav className="w-[80%] m-auto flex items-center justify-between">
        <ul className="container mx-auto flex justify-start items-center text-gray-400">
          {dropdownItems.map((dropdown, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center px-4 py-2 hover:text-white focus:outline-none"
              >
                <img
                  src={dropdown.icon}
                  alt={dropdown.title}
                  className="w-15 mr-2"
                />
                {dropdown.title}
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              {visibleDropdown === index && (
                <div className="absolute z-30 left-0 bg-gray-800 text-white w-64 shadow-lg">
                  {dropdown.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center px-4 py-3 hover:bg-gray-700"
                    >
                      <img src={link.icon} alt={link.text} className="w-10 mr-3" />
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
