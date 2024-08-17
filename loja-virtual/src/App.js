import './App.css';
import Login from './pages/pageLogin';
import Home from './pages/pageHome';
import Produtos from './pages/pageProdutos';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
