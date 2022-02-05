// See https://preactjs.com/guide/v10/debugging/
if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import { render } from "preact";
import App from "./App.jsx";

// Inject the main component into a DOM node (same as React)
render(<App />, document.getElementById("app-root"));
