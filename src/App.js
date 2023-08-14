import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';
import Error from './components/Error/Error';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:username" element={<UserPage />} />
              <Route path="*" element={<Error />} />      
          </Routes>
      </BrowserRouter>
  );
}

export default App;
