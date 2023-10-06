// src/components/TrainList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const TrainList = () => {
  // Mock train data for illustration
  const mockTrains = [
    {
      id: 1,
      name: 'Express Train 1',
      departureTime: '09:30 AM',
      delay: 10, // Delay in minutes
      price: 50,
      seatsAvailable: 30,
    },
    {
      id: 2,
      name: 'Superfast Train 2',
      departureTime: '10:00 AM',
      delay: 5,
      price: 75,
      seatsAvailable: 20,
    },
    {
      id: 3,
      name: 'Local Train 3',
      departureTime: '11:15 AM',
      delay: 0,
      price: 30,
      seatsAvailable: 50,
    },
  ];

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch train data from an API here
    // For this example, we'll use the mockTrains data
    setTrains(mockTrains);
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>
              <h3>{train.name}</h3>
            </Link>
            <p>Departure Time: {train.departureTime}</p>
            <p>Delay: {train.delay} minutes</p>
            <p>Price: ${train.price}</p>
            <p>Seats Available: {train.seatsAvailable}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
