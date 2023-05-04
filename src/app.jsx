import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import useServerContext from "ultra/hooks/use-server-context.js";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import useAsset from "ultra/hooks/use-asset.js";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));

const RouteNotFound = () => {
  useServerContext((context) => {
    context.status(404);
  });
  return <div>Not found</div>;
};

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </head>
      <body>
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </body>
    </html>
  );
};

export default App;
