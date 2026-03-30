import Card from 'react-bootstrap/Card';
import React from 'react';



function VillainCard({villain}) {
    if (!villain) return(null);

    return(
        <Card className='card-villain' >
            <Card.Img variant="top" src={villain?.images?.sm} style={{height: "50vh"}} />
            <Card.Body>
                <Card.Title>{villain.name}</Card.Title>
                <p>Power: {villain.powerstats.power}</p>
                <p>Speed: {villain.powerstats.speed}</p>
                <p>Strength: {villain.powerstats.strength}</p>
                <p>Intelligence: {villain.powerstats.intelligence}</p>
            </Card.Body>
        </Card>
    );
}

export default VillainCard;
