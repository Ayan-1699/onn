import React from 'react'
import { cardDetails } from '../../CardDetails';
import './Card.css'

export default function Card() {

  const onPlayClick = (link, e) => {
    window.location.href = link;
  }

  return (
    <div className="Card">
      <h1>Hit Songs</h1>
      <div className='container'> 
        {
          cardDetails.map ((card, key) => {
            return(
              <div key={key}
               className='cardDetail'>
                <img src={card.imgPath} alt={'Song'} className="cardImage" />
                <div className="cardContent">
                  <h3 className="cardName">{card.name}</h3>
                  <button className="play" onClick={()=>onPlayClick(card.link)}>
                      Play
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
