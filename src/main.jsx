/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */


import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StarRating from "./Components/StarRating";
import TextExpander from "./Components/TextExpander";
import App from './App.jsx'
import MonieCOnverter from "./Components/MonieCOnverter.jsx";

function Test() {
  const [starRate, setStarRate] = useState(0);

  return (
    <div>
      <StarRating onRate={setStarRate} color="brown" />
      <p> you have {starRate} star rating</p>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StarRating
      color="red"
      txt="text-red-700 text-2xl"
      className="h-16 w-16 "
      max={5}
      messages = {["poor", "fair", "good", "verygood", "execellent"]}
    />
    <StarRating  color="green" txt="text-green-700 text-2xl" max={5}  />
    <StarRating messages={['good', 'excellent']} />
    <Test/> */}
    {/* <TextExpander>
      Space travel is the ultimate adventure! Imagine soaring past the stars and
      exploring new worlds. It's the stuff of dreams and science fiction, but
      believe it or not, space travel is a real thing. Humans and robots are
      constantly venturing out into the cosmos to uncover its secrets and push
      the boundaries of what's possible.
    </TextExpander>

    <TextExpander
      collapsedNumWords={20}
      expandButtonText="Show it"
      collapseButtonText="Collapse text"
      buttonColor="text-amber-900"
    >
      Space travel requires some seriously amazing technology and collaboration
      between countries, private companies, and international space
      organizations. And while it's not always easy (or cheap), the results are
      out of this world. Think about the first time humans stepped foot on the
      moon or when rovers were sent to roam around on Mars.
    </TextExpander>
    <TextExpander expanded={true} className="bg-pink-300">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander> */}
    <MonieCOnverter/>
  </StrictMode>
);
