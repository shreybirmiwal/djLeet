import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChallengeDetail from "./pages/ChallengeDetail";
import ChallengePage from "./pages/ChallengePage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/challenges" element={<ChallengePage />} />
        <Route path="/challenge/:name" element={<ChallengeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
