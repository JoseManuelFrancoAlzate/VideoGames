import React from 'react'
import styled from './Card.module.css'

export default class Card extends React.Component{
    render(){
        return(
            <div className={styled.card}>
<div className={styled.cardLogo}>
    <img src='https://w7.pngwing.com/pngs/977/162/png-transparent-video-game-game-controllers-gaming-miscellaneous-game-logo.png'
    width='100'/>
</div>
<div className={styled.cardContent}>
    <h1>Titulo</h1>
    <p>Description</p>
</div>

            </div>
            
            
        )
    }
}
