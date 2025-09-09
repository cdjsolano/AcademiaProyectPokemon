import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function Categories() {
  
     const categories = [
        'Normal',
        'Agua',
        'Bicho',
        'Electrico',
        'Fuego',
        'Hada',
        'Planta',
        'Tierra',
        'Venon'
    ];


    return (

        <nav className="menuCategorias">
            <ul className="categList">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="categItem"
                    >
                        <Link
                            to={`/${category.toLowerCase().replace(/\s/g, '-')}`} >
                        
                            {category}
                            
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>


    )
  
}

export default Categories