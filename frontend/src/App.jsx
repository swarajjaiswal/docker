// App.jsx
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, hobby, age };
if(!name || !hobby || !age)
  {return;}

    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log(response.data); 
      setSubmittedData((prevData) => [...prevData, formData]); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleClick = async() => {
    const response = await axios.get('http://localhost:3000/getusers');
    console.log(response.data);
    setSubmittedData(response.data);
    console.log(submittedData);
  }
  

  return (
    <div className="app">
      <h1>Personal Information form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hobby">Hobby:</label>
          <input
            type="text"
            id="hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            placeholder="Enter your hobby"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <button onClick={handleClick}>To see all users Click Me !</button>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          {submittedData.map((data, index) => (
            <div key={index}>
              <p>Name: {data.name}</p>
              <p>Hobby: {data.hobby}</p>
              <p>Age: {data.age}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
