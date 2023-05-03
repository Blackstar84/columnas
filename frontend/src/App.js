/* import React from "react";
import Column from "./Column";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default App;
 */

import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const Column = () => {
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setItems([...items, { value: inputValue, color }]);
      setInputValue('');
    }
  };

  const handleEdit = (index, newValue) => {
    const newItems = [...items];
    newItems[index].value = newValue;
    setItems(newItems);
  };

  return (
    <div className='col'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SketchPicker color={color} onChange={handleColorChange} />

      {items.map((item, index) => (
        <div key={index} style={{ backgroundColor: item.color }}>
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleEdit(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

const App = () => (
    <div className='container'>
      <div className="row align-items-start">
        <Column />
        <Column />
        <Column />
      </div>
    </div>
);

export default App;




/* function App() {
  const [firstName, setFirstName] = useState('');
  const [companyRole, setCompanyRole] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/insert', {
      firstName,
      companyRole
    }).then(() => alert('Data sent to server!')).catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>React MongoDB Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Company Role" onChange={(e) => setCompanyRole(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
} */






/* 

const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );


try {
  setIsLoading(true);
  
  const response = await fetch('http://localhost:5000/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value
    })
  });

  const responseData = await response.json(); */