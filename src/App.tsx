import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([PublicRoutes(), PrivateRoutes()]);
  return <RouterProvider router={router} />;
}

export default App;
