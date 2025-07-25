import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const InfoCard = () => {

    const [expanded, setExpanded] = useState(false);
    const toggleCard = () => setExpanded(prev => !prev);

    const { Name, Information } = useSelector(state => state.DataChurch);


    return (
        <div className={`info-card ${expanded ? 'expanded' : ''}`}>

            <div className="toggle-icon" onClick={toggleCard}>
                <img src="./i.svg" alt="i" />
            </div>

            <div className="card-content">
                <h2 className="card-title">{Name}</h2>
                <p className="card-description">{Information}</p>
            </div>

        </div>
    );
};

export default InfoCard;