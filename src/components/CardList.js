import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

export function CardList( { cards }) {

    if (cards.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                <span className="icon-check" />
                    <div className="title-message" >You have no cards</div>
                    <div className="subtitle-message" >Sit back and relex</div>
                </div>
            </div>
        );
    }

    const appData = [
        ...cards
    ]

    return (
        <div className="list-items">
            {
                appData.map(data => (
                    <Card key={data.id} data={data} />
                ))
            }
        </div>
    );
    

    
}

CardList.prototype = {
    cards: PropTypes.arrayOf(Card.prototype.data).isRequired
}


