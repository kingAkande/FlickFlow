/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const TextExpander = ({
  children,
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText = "Show text",
  collapseButtonText = "show less",
  buttonColor = "text-pink-700",
  className = "p-2.5 border border-gray-300  rounded-md bg-gray-100 font-sans",
}) => {
  // const message = `Space travel is the ultimate adventure! Imagine soaring past the stars
  // and exploring new worlds. It's the stuff of dreams and science fiction,
  // but believe it or not, space travel is a real thing. Humans and robots
  // are constantly venturing out into the cosmos to uncover its secrets and
  // push the boundaries of what's possible.`;

  const [isExpanded, setIsExpanded] = useState(expanded);
  const [mxg, setMxg] = useState(children);

  function handleMxg() {
    setMxg(() =>
      children <= collapsedNumWords
        ? children
        : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."
    );

    setIsExpanded((isExp) => !isExp);
  }

  return (
    <div className={className}>
      <span>{isExpanded ? mxg : children}</span>
      <button
        className={` ml-6  ${isExpanded ? buttonColor : "text-green-700"}`}
        onClick={handleMxg}
      >
        {isExpanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
