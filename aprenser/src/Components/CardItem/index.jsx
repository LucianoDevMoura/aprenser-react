import React from 'react';
import './stiloCards.css';

export function CardItem( {itensCard} ){
    return(
        <>
            {
                itensCard.map((itensCard, index)=>(
                    <div key={ index } className="cards">
                        <div className="card" >
                            <img src={ itensCard.src } alt={ itensCard.title} />
                            <div className="descricao">
                                <h3>{ itensCard.title }</h3>
                                <p>{ itensCard.desc }</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

