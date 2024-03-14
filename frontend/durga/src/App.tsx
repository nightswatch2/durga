import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';



const API_URL = process.env.API_BASE_URL

type Message = {
  message: string;
}


async function getPing() : Promise<Message> {
return fetch( API_URL + '/ping')
    .then(response => response.json())
    .then(data => data as Message);

}




function App() {
  // let msg = await getPing();

  const[msg, setMsg] = useState<Message>({message: ""});
  
  useEffect(() => {
    getPing().then((data) => {
      setMsg(data);
    }).catch((error) => {
      console.error('Error:', error);
    });
  }, []);


  console.log(msg);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {msg.message && <p>{msg.message}</p>}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
