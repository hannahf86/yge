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
import Tutors from "./Pages/Tutors";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";

// HELPERS & LOADERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="tutors" element={<Tutors />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
