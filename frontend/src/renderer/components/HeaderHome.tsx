import React, { useEffect } from "react";
import NavDropDownItem from "./NavDropDownItem";
import {
  CloudIcon,
  CodeBracketSquareIcon,
  CogIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../assets/svg/logo.svg";
import { useCoverStore } from "../../state";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import LetterService from "../../services/letter/LetterService";
import { useState } from "react";

function HeaderHome() {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const { currentUser, template, setTemplate, setTriggerRender, onLogout } =
    useCoverStore();

  async function handleFrontendLetter() {
    const letter = (await LetterService.frontEndLetter()) as Letter;

    const newSampleData = [
      {
        letterTo: "Dear Hiring Manager,",
        introduction: letter.introduction,
        body: letter.body,
        end: letter.end,
        bullets: letter.bullets,
        signiture: "Sincerely, \n\nBlen Assefa",
      },
    ];

    const newTemplate = {
      schemas: template.schemas,
      basePdf: template.basePdf,
      sampledata: newSampleData,
      columns: template.columns,
    };

    setTriggerRender(true);
    setTemplate(newTemplate);
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full h-16 bg-white  bg-opacity-80 backdrop-blur-lg z-50">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
            </a>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={toggleMenu}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  x-show={(!open).toString()}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  x-show={open.toString()}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
              open ? "flex" : "hidden"
            }`}
          >
            <div
              className="relative"
              onClick={() => {
                if (dropdownOpen) {
                  setDropdownOpen(false);
                }
              }}
            >
              <button
                onClick={toggleDropdown}
                className="flex flex-row items-center w-full mx-4 px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                <span>Dropdown</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-60">
                  <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                    <NavDropDownItem
                      children={
                        <ComputerDesktopIcon className="h-6 w-6 text-emerald-500" />
                      }
                      title={"Front-end Position"}
                      onClick={handleFrontendLetter}
                    ></NavDropDownItem>
                    <a
                      className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      Link #2
                    </a>
                    <a
                      className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      Link #3
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Blog
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Portfolio
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              About
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default HeaderHome;
