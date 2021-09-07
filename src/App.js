
import './App.css';
import {BrowserRouter } from 'react-router-dom';
import Router from './component/Router';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
