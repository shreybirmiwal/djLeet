import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChallengeDetail from "./pages/ChallengeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge/:name" element={<ChallengeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
