import React from 'react'
import { BrowserRouter, Route,Routes,Switch } from 'react-router-dom';
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFount from "./components/PageNotFound/PageNotFound";
import Home from './components/Home/Home';
const App = () => {
  return (
    <div className='app'>
<BrowserRouter>
<Header></Header>
<Routes>
<Route path='/' Component={Home} exact/>
<Route path='/movie/:id' exact Component={MovieDetail}/>
<Route Component={PageNotFount} path='*'/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  )
}

export default App