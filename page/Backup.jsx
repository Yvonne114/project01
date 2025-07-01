import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Axios from 'axios'
import {Link} from 'react-router-dom';
import Layout from "./page/Layout";
import Login from "./page/Login";
import Home from "./page/Home";
import NoPage from "./page/NoPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const addMember = () => {
    Axios.post('http://localhost:5172/create', {
      account: account, 
      password: password
    }).then(() => {
      console.log("success");
    });
  };

  return (
<BrowserRouter>
    <div className="App">
      <div className="information">
        <label>Account:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setAccount(event.target.value);
          }}
        />

        <label>Password:</label>
        <input 
          type="password" 
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={addMember}> Add Member</button>

        
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App