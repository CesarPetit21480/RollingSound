import "bootstrap/dist/css/bootstrap.min.css";
import {
  About,
  Administration,
  Home,
  Login,
  Top10,
  NotFoundPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MusicFooter, NavBar, ProtectedRoute } from "./Components";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* Publicas */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/top10" element={<Top10 />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* Privadas */}
          <Route
            path="/Administration"
            element={
              <ProtectedRoute>
                <Administration />
              </ProtectedRoute>
            }
          />
        </Routes>    
      </Router>
      <MusicFooter />
     
    </>
  );
}
export default App;
