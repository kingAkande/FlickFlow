import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StarRating from "./Components/StarRating";
//import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      color="red"
      txt="text-red-700 text-2xl"
      className="h-16 w-16 "
      max={5}
      messages = {["poor", "fair", "good", "verygood", "execellent"]}
    />
    <StarRating  color="green" txt="text-green-700 text-2xl" max={5}  />
    <StarRating messages={['good', 'excellent']} />
  </StrictMode>
);
