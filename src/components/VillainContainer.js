import Card from 'react-bootstrap/Card';
import react from 'react';


function VillainContainer({villains}) {
    return(
    <Card>
        <div style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
            <h2>{villains.name}</h2>
            <img src= {villains.images?.md} alt={villains.name} width={120}/>
            <p><strong>Fullname:</strong> {villains.biograpgy?.fullName}</p>

            <h4>Stats</h4>
            <ul>
                <li>Intelligence: {villains.powerstats?.intelligence}</li>
                <li>Strength: {villains.powerstats?.strength}</li>
                <li>Speed: {villains.powerstats?.speed}</li>
                <li>Durability: {villains.powerstats?.durability}</li>
                <li>Power: {villains.powerstats?.power}</li>
                <li>Combat: {villains.powerstats?.combat}</li>
            </ul>
        </div>
        </Card>
    )
}

export default VillainContainer;

 // <Card.Body>This is some text within a card body.</Card.Body>
