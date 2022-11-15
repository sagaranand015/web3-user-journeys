import React, { useState, useEffect } from 'react';
import Activity from './Activity';
import {
    GetCollectibleMint,
    GetDonationDonate,
    GetExchangeLiquidity,
    GetExchangeSwap,
    GetTransactionMint,
    GetTransactionTransfer
} from './client';
import Layout from './Layout';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }

function App() {
    const [currentAccount, setCurrentAccount] = useState(
        '0x701bef15165c660ef27807b8f91c3543756c416a'
    );
    const [activities, setActivities] = useState(null);
    const [loading, setLoading] = useState(false);

    // const connectWallet = async () => {
    //   const { ethereum } = window;
    //   if (!ethereum) {
    //     alert('Please Install Metamask');
    //   }
    //   try {
    //     await ethereum.request({ method: 'eth_requestAccounts' }).then(function (accounts) {
    //       setCurrentAccount(accounts[0]);
    //       console.log('======= Wallet connected, got the address: ', accounts[0]);
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // useEffect(() => {
    //   const isWalletConnected = async () => {
    //     if (window.ethereum) {
    //       await window.ethereum.request({ method: 'eth_requestAccounts' }).then(function (accounts) {
    //         setCurrentAccount(accounts[0]);
    //       });
    //     }
    //   };
    //   isWalletConnected();
    // }, []);

    useEffect(() => {
        async function tryGetData() {
            try {
                setLoading(true);
                const txMint = await GetTransactionMint(currentAccount);
                const txTransfer = await GetTransactionTransfer(currentAccount);
                const exSwap = await GetExchangeSwap(currentAccount);
                const exLiquidity = await GetExchangeLiquidity(currentAccount);
                const donation = await GetDonationDonate(currentAccount);
                const colMint = await GetCollectibleMint(currentAccount);
                setActivities({
                    txMint: txMint.result,
                    txTransfer: txTransfer.result,
                    exSwap: exSwap.result,
                    exLiquidity: exLiquidity.result,
                    donation: donation.result,
                    colMint: colMint.result
                });
                setLoading(false);
            } catch (err) {
                console.error('err', err);
            }
        }

        tryGetData();
    }, [currentAccount]);

    return (
        <Layout currentAccount={currentAccount} setCurrentAccount={setCurrentAccount}>
            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">WEB3 Journey</h1>
                </div>
                <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <Activity activities={activities} />
                </div>
            </div>
        </Layout>
    );
}

export default App;
