import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage.jsx";

function App() {
  return (
    <div className="App font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
