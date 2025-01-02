import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuizPage from './pages/QuizPage';
import LearningPage from './pages/LearningPage';
import Learning1 from './components/Learning1';
import Learning2 from './components/Learning2';
import Learning3 from './components/Learning3';
import Learning4 from './components/Learning4';
import Learning5 from './components/Learning5';
import CalendarPage from './pages/CalendarPage';








function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/learning1" element={<Learning1 />} />
            <Route path="/learning2" element={<Learning2 />} />
            <Route path="/learning3" element={<Learning3 />} />
            <Route path="/learning4" element={<Learning4 />} />
            <Route path="/learning5" element={<Learning5 />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;