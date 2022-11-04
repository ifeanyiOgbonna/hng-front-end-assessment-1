import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <hr class="north" />
      <footer className="footer">
        <a href="#">
          <img src="/img/Vector.png" alt="vector" />
        </a>
        <a href="#">
          <img src="/img/Footer text.png" alt="vector" />
        </a>
        <a href="#">
          <img src="/img/links-img.png" alt="vector" />
        </a>
      </footer>
    </main>
  );
}

export default App;
