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
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// HELPERS & LOADERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
