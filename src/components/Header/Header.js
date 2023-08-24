import React from 'react'
import {BiSolidUser} from "react-icons/bi";
import "./Header.scss";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link to="/">
        <span>Movie App</span></Link>
      </div>
      <div>
      <BiSolidUser id='userIcon'></BiSolidUser>
      </div>
    </div>
  )
}

export default Header