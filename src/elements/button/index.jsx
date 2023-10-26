import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];

  if (props.isPrimary)
    className.push(
      "text-white py-3 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none bg-primary rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
    );
  else className.push("");

  if (props.isShadow) className.push("shadow-lg");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    className.push("cursor-not-allowed opacity-50");

    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <div className="animate-spin inline-block w-6 h-6 mr-3 border-t-2 border-r-2 border-indigo-600 rounded-full border-t-indigo-600"></div>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isPrimary: propTypes.bool,
  isLoading: propTypes.bool,
  isExternal: propTypes.bool,
  isShadow: propTypes.bool,
};
