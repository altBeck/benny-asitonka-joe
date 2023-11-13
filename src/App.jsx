import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar, Footer } from './components';

import './App.css'

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>

        <Navbar />

        <Footer />

      </Router>

    </>
  )
}

export default App
