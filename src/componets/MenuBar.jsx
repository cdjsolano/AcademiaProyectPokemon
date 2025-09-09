import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import homeIcon from '../icons/homeIcon.png'
import Categories from '../componets/Categories'
import Home from '../pages/Home'


function MenuBar() {
    return (
        <div>
            <div className="barnav">
                
                <button className='homebtn'>
                 <Link to={'/'}><img src={homeIcon} className="iconh" alt="icono de home" /></Link>
                </button>

               <Categories></Categories>

            </div>

           
        </div>
    )
}

export default MenuBar