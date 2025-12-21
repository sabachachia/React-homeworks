import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Unis from './pages/Unis';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { routes } from './constants/routes';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Unis} element={<Unis />} />
        <Route path="/unis/:country" element={<Unis />} />
        <Route path='/details/:domain' element={<Details />} />
        <Route path={routes.NotFound} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;