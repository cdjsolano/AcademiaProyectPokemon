import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import homeIcon from '../icons/homeIcon.png'
import Categories from '../componets/Categories'
import Home from '../pages/Home'
import IconGallery from './IconGallery'

function MenuBar() {
    return (
        <div>
            <div className="barnav">
                
                <button className='homebtn'>
                 <Link to={'/'}><img src={homeIcon} className="iconh" alt="icono de home" /></Link>
                </button>

               <Categories></Categories>

            </div>

            <button className='homebtn'>
                 <Link to={'/Iconoslu'}>Galeria de iconos</Link>
                </button>
        </div>
    )
}

export default MenuBar