import React  from 'react';
import { CardList } from './CardList';
import { cardData } from './Card.stories';




export default {
    component: CardList,
    title: 'Card List',
    excludeStories: /.*Data$/,
}

export const mockData = [
    {...cardData, id: 1, medname: 'med1', meddesc: 'meddesc1', isactive: 1, dosages: '10 mg' },
    {...cardData, id: 2, medname: 'med2', meddesc: 'meddesc2', isactive: 1, dosages: '20 mg' },
    {...cardData, id: 3, medname: 'med3', meddesc: 'meddesc3', isactive: 1, dosages: '30 mg' },
    {...cardData, id: 4, medname: 'med4', meddesc: 'meddesc4', isactive: 1, dosages: '40 mg' },
];

export const Default = () => <CardList cards={mockData} />
export const Empty = () => <CardList cards={[]} />
    

