import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Invoices } from "./pages/Invoices/Invoices.jsx";

//components
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Team from "./pages/team/Team.jsx";
import Contact from "./pages/contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />

      <Route path="contacts" element={<Contact />} />

      <Route path="invoices" element={<Invoices />} />
      {/*   <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} /> */}
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
