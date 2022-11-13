import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert('Please Install Metamask');
    }
    try {
      await ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(function (accounts) {
          setCurrentAccount(accounts[0]);
          console.log(
            '======= Wallet connected, got the address: ',
            accounts[0],
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isWalletConnected = async () => {
      if (window.ethereum) {
        await window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(function (accounts) {
            setCurrentAccount(accounts[0]);
          });
      }
    };
    isWalletConnected();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWalletHandler}>Connect Wallet</button>
        {/* <button onClick={connectWalletHandler}>Connect Wallet</button> */}
      </header>
    </div>
  );
}

export default App;
