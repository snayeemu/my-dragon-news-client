import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="success" />;
  }
  if (user) {
    return children;
  }

  return (
    <Navigate state={{ from: location }} to="/login" replace={true}></Navigate>
  );
};

export default PrivateRoute;
