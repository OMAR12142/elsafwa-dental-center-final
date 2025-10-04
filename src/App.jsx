import { createBrowserRouter, RouterProvider } from "react-router";
import { Suspense, lazy } from "react";
import "./App.css";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Before_after from "./pages/Before_after";

const Aboutus = lazy(() => import("./pages/Aboutus"));
const Contactus = lazy(() => import("./pages/Contactus"));
const Services = lazy(() => import("./pages/Services"));

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-xl font-bold text-[#ED1C24]">
      جاري التحميل...
    </div>
  );
}

function App() {
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> }, 
        { path: "Aboutus", element: <Aboutus /> },
        { path: "Contactus", element: <Contactus /> },
        { path: "Services", element: <Services /> },
        { path: "Before_after", element: <Before_after /> }, 
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={Routing} />
    </Suspense>
  );
}

export default App;
