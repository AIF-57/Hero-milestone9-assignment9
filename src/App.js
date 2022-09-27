import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>

        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>

    </div>
  );
}

export default App;
