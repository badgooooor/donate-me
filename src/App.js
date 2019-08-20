import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

const generatePayload = require('promptpay-qr');

function App() {
  const [ phoneNumber, setPhoneNumber ] = useState("012-345-6789");
  const [ amount, setAmount ] = useState(1.00);
  const [ qrCode ,setqrCode ] = useState("sample");

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }

  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }

  return (
    <div>
      <h2>I'm out of money so please donate me!</h2>
      <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
      <input type="number" value={amount} onChange={handleAmount} />
      <button onClick={handleQR}>Generate Promptpay QR</button>
      <QRCode value={qrCode} />
    </div>
  );
}

export default App;
