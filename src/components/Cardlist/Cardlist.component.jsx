import React from 'react';
import Card from '../Card/Card.component'
import './card-list.styles.css';

function Cardlist(props){
    return(
        <div className="card-list">
            {
                props.monsters.map(monster=>{
                    return <Card monster = {monster} key={monster.id}/>
                })
            }
        </div>
    )
}



export default Cardlist