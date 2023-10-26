import React from "react";
import IconText from "./IconText.jsx";
import Button from "../elements/button/index.jsx";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="py-4 h-20">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <IconText />
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <ul className="flex">
              <li className={`mr-6 ${getNavLinkClass("/")}`}>
                <Button className="" type="link" href="">
                  Home
                </Button>
              </li>
              <li className={`mr-6 ${getNavLinkClass("/browse-by")}`}>
                <Button className="" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`mr-6 ${getNavLinkClass("/stories")}`}>
                <Button className="" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`mr-6 ${getNavLinkClass("/agents")}`}>
                <Button className="" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
