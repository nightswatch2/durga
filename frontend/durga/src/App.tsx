import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';



const API_URL = process.env.API_BASE_URL || "http://localhost:8080";

type Message = {
  message: string;
}


async function getPing() : Promise<Message> {
const pingUrl = `${API_URL}/ping`;
let response = await fetch(pingUrl, {mode:'no-cors'});


// FIXME:somehow the response is not being seen as a 200 ok
// potiential problems:
// - the no cors policy?
// - backend seems to not write to response body and sends it back ? 
// - cors stuff must be added here
//
// maybe the way to go  would be to first isolate which part is the problem here:
// backend or frontend??????????

console.log("response", response);

return Promise.resolve({message: ""});

}




function App() {
  // let msg = await getPing();

  const[msg, setMsg] = useState<Message>({message: ""});
  
  useEffect(() => {
    getPing().then((data) => {
      setMsg(data);
    }).catch((error) => {
      console.error('Error: from use effect', error);
    });
  }, []);


  console.log("printing fom App", msg);


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
