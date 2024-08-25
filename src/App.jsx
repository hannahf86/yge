// REACT-ROUTER-DOM
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// COMPONENTS
import RootNav from "./Components/RootNav";

// PAGES
import Error from "./Pages/Error";
import Landing from "./Pages/Landing";

// HELPERS & LOADERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
