import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:username" element={<UserPage />} />      
          </Routes>
      </BrowserRouter>
  );
}

export default App;
