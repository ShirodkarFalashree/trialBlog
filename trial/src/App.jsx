import React from "react";
import {
  createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes 
} from "react-router-dom";
import Patients from "./pages/Patients/Patients";
import Admin from "./pages/Admin/Admin";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Admin />}></Route>
        <Route path="/card" element={<Patients />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
