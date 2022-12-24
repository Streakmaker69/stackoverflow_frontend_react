import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes';
import KommunicateChat from './chat';

import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <KommunicateChat />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
