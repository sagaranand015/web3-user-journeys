import React from 'react';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const shortenAddress = (address) => {
  if (address)
    return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length)
}

const Activity = ({ activities }) => {
  const [view, setView] = useState('txTransfer');

  const tabs = [
    { name: 'Transaction Transfer', value: 'txTransfer', current: view === 'txTransfer' },
    { name: 'Transaction Mint', value: 'txMint', current: view === 'txMint' },
    { name: 'Exchange Swap', value: 'exSwap', current: view === 'exSwap' },
    { name: 'Exchange Liquidity', value: 'exLiquidity', current: view === 'exLiquidity' },
    { name: 'Collection', value: 'colMint', current: view === 'colMint' },
    { name: 'Donation', value: 'donation', current: view === 'donation' }
  ];

  console.log(activities);

  return (
    <div>
      <nav className="flex space-x-4 mb-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setView(tab.value)}
            className={classNames(
              tab.current ? 'bg-teal-100 text-teal-700' : 'text-gray-500 hover:text-gray-700',
              'px-3 py-2 font-medium text-sm rounded-md'
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </button>
        ))}
      </nav>

      {activities ? (
        <ul className="divide-y divide-gray-200">
          {activities[view].map((a) => (
            <li key={a.hash} className="py-4">
              <div className="flex space-x-3">
                <img className="h-6 w-6 rounded-full" src={a.actions[0].metadata.image} alt="" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {shortenAddress(a.address_from)}
                      {/* {a.address_from.substring(0, 8) + '...'} */}
                      <span className='font-normal'> sent to </span>
                      {shortenAddress(a.address_to)}
                      {/* {a.address_to.substring(0, 8) + '...'} */}
                    </h3>
                    <p className="text-sm text-gray-500">{new Date(a.timestamp).toDateString()}</p>
                  </div>
                  <p className="text-sm text-gray-500">network: {a.network}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Fetching activity..</p>
      )}
    </div>
  );
};

export default Activity;
