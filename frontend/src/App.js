import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import Post from './components/Post';
//import Column  from './components/Column';

const Column = (props) => {
  const [title, setTitle] = useState('');
  const category = props.cat;
  const [color, setColor] = useState('#ffffff');
  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };
  
  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(title, category, color);
      setItems([...items, { value: title, color }]);
      
      axios.post('http://localhost:5000/createPost', {
        title, category, color
    }).then(() => alert('Datos guardados!')).catch((error) => console.log(error));
    setTitle('');
    setUpdate(true);  
    }
  };

  /* const [wentWell, setWell] = useState([]);
  const [toImprove, setImprove] = useState([]);
  const [kudos, setKudos] = useState([]);
  const [update, setUpdate] = useState(false);
let categoria = '';


useEffect(() => {
  const getTodos = (categoria) => {
    axios.get(`http://localhost:5000/posts?category=${categoria}`)
      .then(res => {
        console.log(res);
        switch (categoria) {
          case 'wentWell':
            setWell(res.data)    
            break;
          case 'toImprove':
            setImprove(res.data)
            break;
          case 'kudos':
            setKudos(res.data)
            break;   
        }
        
      })
      .catch(err => {
        console.log(err);
      })
  }
  getTodos('wentWell');
  getTodos('toImprove');
  getTodos('kudos');
  setUpdate(false);
},[update])  */
  

  const handleEdit = (index, newValue) => {
    const newItems = [...items];
    newItems[index].value = newValue;
    setItems(newItems);
  };

  return (
    <div className='col'>
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SketchPicker color={color} onChange={handleColorChange} />

     {/*  { 
      wentWell.length > 0 && wentWell.map((item, index) => (
        <div key={index} style={{ backgroundColor: item.color }}>
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleEdit(e.key,index, e.target.value)}
          />
        </div>
        
      ))} */}
    </div>
  );
};

const App = () => (
    <div className='container'>
      <div className="row align-items-start">
        <Column cat='wentWell' />
        <Column cat='toImprove' />
        <Column cat='kudos' />
      </div>
      <div className="row align-items-start">
        <Post categoria='wentWell' />
        <Post categoria='toImprove' />
        <Post categoria='kudos' />
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