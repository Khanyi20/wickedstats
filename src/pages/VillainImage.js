import React, { useEffect, useState } from "react";

function VillainImage() {

    useEffect(() => {
        fetch('https://superhero-search.p.rapidapi.com/api/villains')
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);

    return(
        <div> Fetch method used for fetching the data</div>
    );

//   const [villain, setVillain] = useState([]);

 
//   useEffect(() => {

//     fetch("https://superhero-search.p.rapidapi.com/api/villains")
//     .then((response) => response.json())
//     .then((data) =>  setVillain(data));
//   }, []);

//  return (

//     <div style={{marginLeft:'50%' } }>
//         {
//             villain &&(
//                 <div>
//                     <h2>Villain Information</h2>
//                     <ul>
//                         {villain.map(user => (
//                         <li key={user.id}>
//                     <p>
//                         Name:
//                         {villain.name}
//                         {villain.id}
//                     </p></li>
//                         ))}
//                     </ul>
//                 </div>
//             )
//         }
//     </div>
// //     <div style={{marginLeft: "50%"}}>

// //       <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">Villain List (using fetch)</h1>
// //       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //         {villain.map(villains => (
// //           <li key={villains.id} className="bg-white shadow p-4 rounded-xl">
// //             <h2 className="text-lg font-semibold">{villains.name}</h2>
// //             <p className="text-sm text-gray-600">{villains.powerstats.durability}</p>
// //             <p className="text-sm text-gray-600">{villains.appearance.hairColor}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>

// //     </div>
//  );

}

export default VillainImage;