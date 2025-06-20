import React, { useState } from 'react';

const InfoCard = ({ name, description }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleCard = () => setExpanded(prev => !prev);

    return (
        <div className={`info-card ${expanded ? 'expanded' : ''}`}>
            <div className="toggle-icon" onClick={toggleCard}>
                <img src="./i.svg" alt="i" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;