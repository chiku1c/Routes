import { Suspense } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

const PrivateRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const auth = false;
  if (auth) {
    if (allowedRoles.includes(auth.role)) {
      return <Wrapper />;
    } else {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  } else if (auth?.email) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

PrivateRoute.propTypes = {
  title: PropTypes.string.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Wrapper = ({ title, children }) => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <HelmetProvider context={{}}>
        <title>{title}</title>
        {children}
        <Outlet />
      </HelmetProvider>
    </Suspense>
  );
};

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PrivateRoute;
