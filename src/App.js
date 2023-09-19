import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function LayoutWithHeader({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

function App() {
  return (
    // Body
    <div className='flex flex-col py-4 px-4 mx-auto bg-customDark'>
      {/* Wrapper */}
      <div className='p-6 text-customDarkGreen bg-customLightGreen rounded-md'>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route
              path='/'
              element={
                <LayoutWithHeader>
                  <Home />
                </LayoutWithHeader>
              }
            />
            {/* Other routes */}

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
