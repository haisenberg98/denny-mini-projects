import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router basename='/denny-mini-projects'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
