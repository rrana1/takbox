import React from 'react';
import Card from './Card';


export default {
    component: Card,
    title: 'Card',
    excludeStories: /.*Data$/,
}

export const cardData = {
    id: 1,
    medname: 'Acetomorphine',
    meddesc: 'Pain killer, fever medicine',
    isactive: true,
    doseage: '10mg'
};

//Screen and test cases

export const FirstView = () => <Card data={{...cardData}} />

