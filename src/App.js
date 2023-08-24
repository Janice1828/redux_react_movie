import React from 'react'
import "./App.css";
import { useSelector,useDispatch } from 'react-redux';
import { decNumber,incNumber } from './actions';
const App = () => {
  const myState=useSelector((state)=>state.ChangeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className='container'>
      <h1>Increament/Decrement Counter</h1>
<h4>Using React & Redux</h4>
<div className='quantity'>
  <a href="#" className='quantity_minus' title='Decrement' onClick={()=>dispatch(decNumber())}><span>-</span></a>
<input type="" name="quantity" value={myState} disabled/>
<a href="#" className='quantity_plus' title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span></a>

</div>
    </div>
  )
}

export default App;