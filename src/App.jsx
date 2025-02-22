import "bootstrap/dist/css/bootstrap.min.css";
import { About, Administration, Home, Top10, NotFoundPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MusicFooter, MusicPlayer, NavBar, ProtectedRoute } from "./Components";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        
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
          <div className="player">
            <MusicPlayer />
          </div>
        </Router>

        <MusicFooter />
      </ContextProvider>
    </>
  );
}
export default App;
