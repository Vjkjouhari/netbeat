import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// const App = lazy(() => import("./App"));
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<h2>Loading...</h2>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
