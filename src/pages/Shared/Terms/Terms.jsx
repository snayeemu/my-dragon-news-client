import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iusto
        temporibus at ad voluptatum repellat dignissimos iste minus qui
        repellendus, quia et, facere culpa aperiam eos vel magni illum porro.
      </p>
      <p>
        <small>
          Go back to <Link to="/register">Register</Link>
        </small>
      </p>
    </div>
  );
};

export default Terms;
