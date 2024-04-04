import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Index() {
  const [users, setUsers] = useState([]);
  const [Users, SetUsers] = useState([]);


  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    SetUsers(res.data); // Update state with fetched data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}, []);

  return (
    <>
    <div>
      Index
      {users.map(user => (
        <div key={user.id}>{user.id}</div>
      ))}
    </div>
    <div>
      {Users.map(User => (
        <div key={User.id}>{User.name}</div>
      ))}
    </div>
    </>
  );
}

export default Index;
