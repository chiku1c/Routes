import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ title }) => {
  const auth = false;

  return !auth ? (
    <Suspense fallback={"loading"}>
      <HelmetProvider context={{}}>
        <title>{title}</title>
        <Outlet />
      </HelmetProvider>
    </Suspense>
  ) : (
    <Navigate to="/dashboard" />
  );
};

PublicRoute.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PublicRoute;
