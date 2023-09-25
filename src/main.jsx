import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import { NewsletterContextProvider } from "./context/NewsletterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsletterContextProvider>
      <RouterProvider router={router} />
    </NewsletterContextProvider>
  </React.StrictMode>
);
