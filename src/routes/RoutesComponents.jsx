import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";
import { privateRouteList, publicRouteList } from ".";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        {/* Private Route List */}
        {privateRouteList.map(
          ({ title, path, allowedRoles, element: Element }) => (
            <Route
              key={path}
              element={
                <PrivateRoute allowedRoles={allowedRoles} title={title} />
              }
            >
              <Route path={path} element={<Element />} />
            </Route>
          )
        )}

        {/* Public Route List */}
        {publicRouteList.map(({ title, path, element: Element }) => (
          <Route key={path} element={<PublicRoute title={title} />}>
            <Route path={path} element={<Element />} />
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
