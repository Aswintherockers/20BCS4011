// src/components/TrainDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const TrainDetail = () => {
const { id } = useParams();

// Fetch train details based on 'id' (you would need to implement this)
// For this example, let's assume you have a function 'getTrainDetailsById'
// that fetches train details from an API
const train = getTrainDetailsById(id);

return (
<div>
<h1>Train Detail</h1>
{train ? (
<div>
<h2>{train.name}</h2>
<p>Departure Time: {train.departureTime}</p>
<p>Delay: {train.delay} minutes</p>
<p>Price: ${train.price}</p>
<p>Seats Available: {train.seatsAvailable}</p>
{/* Display other train details */}
</div>
) : (
<p>Train not found</p>
)}
</div>
);
};

export default TrainDetail;
