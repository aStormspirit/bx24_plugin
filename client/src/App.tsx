import {useState, useEffect} from 'react';
import './App.css';
import { BX24 } from "bx24";
import axios from 'axios';

function App() {
  const [auth, setAuth] = useState<any>();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  
  const urlParams = new URLSearchParams(window.location.search);
  const baseUrl = `${urlParams.get("PROTOCOL") === "0" ? "https" : "http"}://${urlParams.get("DOMAIN")}`;
  const bx24 = new BX24(window);

  useEffect(() => {

    setLoading(true);
    
    bx24.getAuth()
    .then(auth => {
      axios.get(`https://mpkubatura.bitrix24.ru/rest/user.current?auth=${auth?.ACCESS_TOKEN}`)
      .then(res => {
        console.log(res.data.result);
        setAuth(res.data.result);
        setUser(res.data.result?.NAME); 
      })
    })
    .catch(err => {
      console.log(err);
    })

    setLoading(false);

  }, []);

  if(loading) {
    return <div>Loading...</div>
  }
  

    return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {user}</h1>
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
