import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StarRating from "./Components/StarRating";
//import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating color="red" className="h-6 w-6 text-red-600 " max={5} />
    <StarRating max={10} />
  </StrictMode>
);
 