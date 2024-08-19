
import React from 'react';
import Style from '../Navegacao/NavBar.module.css';


export const NavBar = () => {

    const navBar = [
        'Cursos',
        'Nossa Escola', 
        'Contato',
    ];
    
    return (
        <ul className={ Style.lista }>
            {
                navBar.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
}