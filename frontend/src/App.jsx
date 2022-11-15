import React, { useState, useEffect } from 'react';
import Activity from './Activity';
import { GetCollectibleMint, GetDonationDonate, GetExchangeLiquidity, GetExchangeSwap, GetTransactionMint, GetTransactionTransfer } from './client';
import Layout from './Layout';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }

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

    async function tryGetData() {
        try {
            await GetTransactionMint('0x701bef15165c660ef27807b8f91c3543756c416a');
            await GetTransactionTransfer('0x701bef15165c660ef27807b8f91c3543756c416a');
            await GetExchangeSwap('0x701bef15165c660ef27807b8f91c3543756c416a');
            await GetExchangeLiquidity('0x701bef15165c660ef27807b8f91c3543756c416a');
            await GetDonationDonate('0x701bef15165c660ef27807b8f91c3543756c416a');
            await GetCollectibleMint('0x701bef15165c660ef27807b8f91c3543756c416a');
        } catch (err) {
            console.error('err', err);
        }
    }

    return (
        <Layout currentAccount={currentAccount}>
            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        <button
                            onClick={connectWalletHandler}
                            type="button"
                            className="mr-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            connect wallet
                        </button>
                        <button
                            onClick={tryGetData}
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            get data
                        </button>
                    </div>

                    <Activity />
                </div>
            </div>
        </Layout>
    );
}

export default App;
