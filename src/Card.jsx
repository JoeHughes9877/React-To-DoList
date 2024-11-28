import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, content, onDelete }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{content}</p>
            <button className='Delete-btn' onClick={onDelete}>Delete</button>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Card;
