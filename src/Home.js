import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/about">Go to About Section using Link</Link> <br />
      <button type="button" onClick={() => navigate("/about")}>
        Go to about section using button
      </button>
      <div>This is a Home Page</div>
    </>
  );
}

export default Home;
