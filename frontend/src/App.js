import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { GetData } from './client'

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

  async function TryGetData() {
    await GetData("0x701bef15165c660ef27807b8f91c3543756c416a", "t1", "t2");
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWalletHandler}>Connect Wallet</button>
        <button onClick={TryGetData}>Try Get Data</button>
      </header>
    </div>
  );
}

export default App;
