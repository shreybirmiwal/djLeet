import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChallengeDetail from "./pages/ChallengeDetail";
import ChallengePage from "./pages/ChallengePage";
import Home from "./pages/Home";
import DjMixer from "./pages/DjMixer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/challenges" element={<ChallengePage />} />
        <Route path="/challenge/:name" element={<ChallengeDetail />} />
        <Route path='/mixer/:name' element={<DjMixer />} />
      </Routes>
    </Router>
  );
}

export default App;
