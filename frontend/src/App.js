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
    <div>
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
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: 20,
    }}
  >
    <Column />
    <Column />
    <Column />
  </div>
);

export default App;






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