import React from 'react';
import  PropTypes from 'prop-types';

export default function Card({ data: {id, medname, meddesc, isactive, doseage} }) {
    return (
        <div className="row">
            <span className="checkbox">{medname}</span>
            <span className="checkbox">{meddesc}</span>
        </div>
    );
}

Card.prototype = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        medname: PropTypes.string.isRequired,
        meddesc: PropTypes.string.isRequired,
        isactive: PropTypes.bool.isRequired,
        doseage: PropTypes.string.isRequired,
    }),
}

