import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/about">Go to About Section</Link>
      <div>This is a Home Page</div>
    </>
  );
}

export default Home;
