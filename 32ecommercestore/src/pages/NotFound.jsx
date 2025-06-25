import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="notfound-page">
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go Back Home</Link>
  </main>
);

export default NotFound;
