

// imports card component from React Bootstrap
import Card from 'react-bootstrap/Card';
import React from 'react';


//function to use and process one villain object form where it is stored
function VillainCard({villain}) {
    //if villain object is not found then it will stop running to prevent errors
    if (!villain) return(null);

    return(
        <Card className='card-villain' >
            <Card.Img variant="top" src={villain?.images?.sm} style={{height: "50vh"}} />
            <Card.Body>
                {/* displays name of villain fetched from the villain state storing the Data */}
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
