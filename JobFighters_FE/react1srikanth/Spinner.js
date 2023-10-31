import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

function YourComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      // Replace this with your actual API fetch logic
      axios.post('http://127.0.0.1:8000/api/getemployees/', [{ 'empno': 13434, 'empname': 'reddy', 'salary': 12673 }]).then(
        (resp) => { console.log(resp) }
      ).catch((error) => { console.log(error) })
    }, 2000); // Simulated loading time
  }, []);

  return (
    <div>
      {loading ? (
        // Render the loading spinner while data is being fetched
        <LoadingSpinner />
      ) : (
        // Render your data once it's available
        <h1>satya</h1>
      )}
    </div>
  );
}

export default YourComponent;
