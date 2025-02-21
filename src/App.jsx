import "bootstrap/dist/css/bootstrap.min.css";
import { About, Administration, Home, Top10, NotFoundPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MusicFooter, NavBar, ProtectedRoute } from "./Components";
import "./App.css";
import UserProvider from "./Context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <NavBar />
          <Routes>
            {/* Publicas */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/top10" element={<Top10 />} />
            {/* <Route path="/login" element={<Login />} /> */}
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
      </UserProvider>
    </>
  );
}
export default App;
