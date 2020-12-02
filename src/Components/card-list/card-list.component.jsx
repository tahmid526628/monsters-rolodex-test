import React from 'react';

import {Card} from '../card/card.component';

import './card-list.style.css';

export const CardList = (props) => {
    console.log(props);
    return(
    <div className="card-list">
        { props.monsters.map(monster => 
            <Card key={monster.id} monster={monster}/>    
        )}
    </div> // props hishebe je parameter ashbe tar children
                                // ex- tahmid k pathano hoise name='Tahmid' ei attribute er maddhome
                                // then tar children holo <h1> tag
    )
}


// state 
// props


// asynchronus == takes indefinite time that JS don't know
// synchronus == happend immediately

// setState() is a asynchronus function. so etar moddhe console dile ta kisu shomoy pore ghotbe jar fole ektu pisiye thaakbe
// actual event er theke. er jonno ekta call function e console deya jete paare.

// synthetic event