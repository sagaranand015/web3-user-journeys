import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';

// hardcode some wallets because when we call eth_requestAccounts we typically only get 1 address back
const initial = [
  {
    address: '0x9A9B3fBb7c83D82E7cF696d6F2ecCa35Ba00C356'
  }
];

const shortenAddress = (address) => {
  if (address)
    return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length)
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = ({ children, currentAccount, setCurrentAccount }) => {
  const { register, handleSubmit } = useForm();
  const [currentAccounts, setCurrentAccounts] = useState(initial);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Adding extra wallets here
  const onSubmit = (data) => {
    setCurrentAccounts((prev) => [...prev, { address: data.ethAddress }]);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-teal-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=300"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {currentAccounts.map((item) => (
                        <button
                          key={item.address}
                          onClick={() => setCurrentAccount(item.address)}
                          className={classNames(
                            item.current
                              ? 'bg-teal-800 text-white'
                              : 'text-white hover:bg-teal-600 hover:bg-opacity-75',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          {/* {item.address.substring(0, 16) + '...'} */}
                          {shortenAddress(item.address)}
                        </button>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-teal-800 p-4">
                    <a href="/" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="/pixel.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">
                            {/* {currentAccount?.substring(0, 16) + '...'} */}
                            {shortenAddress(currentAccount)}
                          </p>
                          <p className="text-sm font-medium text-teal-200 group-hover:text-white">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-teal-700">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=300"
                  alt="Your Company"
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {currentAccounts.map((item) => (
                  <button
                    key={item.address}
                    onClick={() => setCurrentAccount(item.address)}
                    className={classNames(
                      item.current
                        ? 'bg-teal-800 text-white'
                        : 'text-white hover:bg-teal-600 hover:bg-opacity-75',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md mb-2'
                    )}
                  >
                    {/* {item.address.substring(0, 16) + '...'} */}
                    {shortenAddress(item.address)}
                  </button>
                ))}
              </nav>
              <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className="block text-base font-medium text-gray-100">
                  Add a wallet address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('ethAddress')}
                    id="ethAddress"
                    className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0x000000000000"
                  />
                </div>
                <button
                  type="submit"
                  className="flex rounded-full px-4 py-2 mt-4 items-center justify-center border border-transparent bg-orange-300 text-center text-md font-semibold leading-4 text-cyan-700 shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <PlusIcon className="w-5 h-5 mr-1" />
                  Add Address
                </button>
              </form>
            </div>
            {/* <div className="flex flex-shrink-0 border-t border-teal-800 p-4">
              <a href="/" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-9 w-9 rounded-full" src="/pixel.png" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {currentAccount?.substring(0, 16) + '...'}
                    </p>
                    <p className="text-xs font-medium text-teal-200 group-hover:text-white">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
