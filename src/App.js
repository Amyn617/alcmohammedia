import React, { Suspense, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes/routeConfig";


const App = () => {
  const basename = process.env.PUBLIC_URL || "";

  React.useEffect(() => {
    const currentPath = sessionStorage.getItem("redirect");
    if (currentPath) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", currentPath);
    }

    window.onbeforeunload = () => {
      sessionStorage.setItem("redirect", window.location.pathname);
    };
  }, []);

  return (
    <LanguageProvider>
        <Router basename={basename}>
          <Suspense fallback={null}>
              <Routes>
                {routes.map(({ path, element: Element, sections }) => (
                  <React.Fragment key={path}>
                    <Route path={path} element={<Element />} />
                    {sections?.map((section) => (
                      <Route
                        key={`${path}/${section}`}
                        path={`${path}/${section}`}
                        element={<Element />}
                      />
                    ))}
                  </React.Fragment>
                ))}
                <Route path="/home" element={<Navigate to="/" replace />} />
              </Routes>
          </Suspense>
        </Router>
    </LanguageProvider>
  );
};

export default App;
