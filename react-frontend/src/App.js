// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ChallengesPage from './pages/ChallengesPage';
// import ChallengeDetailPage from './pages/ChallengeDetailPage';
// import Layout from './components/Layout'; // Import the Layout
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <HomePage />
    </div>
    // <Router>
    //   <Layout> {/* Wrap all routes within the Layout */}
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/challenges" element={<ChallengesPage />} />
    //       <Route path="/challenges/:challengeId" element={<ChallengeDetailPage />} />
    //       {/* Optional: Add a 404 Not Found Route */}
    //       <Route path="*" element={
    //         <div className='text-center flex-grow flex flex-col justify-center items-center'>
    //           <h1 className='text-2xl font-bold'>404 - Not Found</h1>
    //           <Link to="/" className='text-blue-600 hover:underline mt-4'>go home</Link>
    //         </div>
    //       } />
    //     </Routes>
    //   </Layout>
    // </Router>
  );
}


export default App;