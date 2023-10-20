import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
function App() {
  const [num, setNum] = useState(1);
  const [lett, setLett] = useState(1);
  const [symb, setSymb] = useState(1);
  const [pasw, setPasw] = useState("");

  const generatePasw = () => {
    event.preventDefault();
    axios
      .post("https://passwordgenerator-obuo.onrender.com/gen/pasw", { num, lett, symb })
      .then((response) => {
        setPasw(response.data.password);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  const copyToClipboard = () => {
    if (pasw) {
      navigator.clipboard.writeText(pasw).then(function() {
        alert("Password copied to clipboard!");
      });
    }
  };
  return (
    <div className="main">
      <h1>Generate Password</h1>
      <div className="inputbox flex">
        <label>How many numbers?</label>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          type="number"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <label>How many letters?</label>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          type="number"
          value={lett}
          onChange={(e) => {
            setLett(e.target.value);
          }}
        />
        <label>how many symbols?</label>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          type="number"
          value={symb}
          onChange={(e) => {
            setSymb(e.target.value);
          }}
        />
        <Button variant="contained" onClick={generatePasw}>
          Generate
        </Button>
        <br />
      </div>
      {pasw && 
      <div className="outputpasw"><div className="alert"><Alert severity="success">password is: <b style={{letterSpacing:".1rem"}}>{pasw}</b></Alert></div>
      <span onClick={copyToClipboard}><i class="fa-solid fa-copy"></i></span></div>}
    </div>
  );
}

export default App;
