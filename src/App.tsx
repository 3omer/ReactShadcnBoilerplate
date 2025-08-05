import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";

import ProtectedRoute from "@/components/protected-route";
import Providers from "@/components/providers";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
