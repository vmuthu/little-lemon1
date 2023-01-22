import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import HomePage from './HomePage';
import BookingsMain from './BookingsMain';
import MenuPage from './MenuPage';
import About from './About';
import OrderOnline from './OrderOnline';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<HomePage />}></Route>
        <Route path='/reservations' element={<BookingsMain />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/orderonline' element={<OrderOnline />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
