import * as React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Skincare.io', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const iconRightStyle = {
    marginLeft: 'auto',
};

// export default function Example() {
function NavBar() {
  return (
    <Disclosure as="nav" className="bg-sage-green">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/sparkle-logo.png"
                  />
                </div>
                <div className="hidden sm:ml-4 sm:block">
                  <div className="flex items-center justify-end space-x-5">   
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-sage-green text-white' : 'text-white hover:bg-gray hover:text-white',
                            'rounded-md px-3 py-2 text-xl font-medium font-sans'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </a>
                    ))}
                    
                    {/* <a href="#" className="text-white hover:bg-sage-green-700 hover:text-white rounded-md p-2">
                        <HomeIcon className="h-6 w-6" style={iconRightStyle} aria-hidden="true" />
                    </a> */}

                  </div>
                </div>
              </div>
             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    
  )
}


function Sidebar() {
  return (
    <div className="bg-pretty-blue py-10 px-10">
    {/* // <div className="bg-pretty-blue h-full"> */}
      <ul className="flex flex-col">
        <li className="mb-4">
          <a
            className="text-gray-200 hover:text-white hover:underline"
            href="#"
          >
            Cleanser
          </a>
        </li>
        <li className="mb-4">
          <a
            className="text-gray-200 hover:text-white hover:underline"
            href="#"
          >
            Toner
          </a>
        </li>
        <li className="mb-4">
          <a
            className="text-gray-200 hover:text-white hover:underline"
            href="#"
          >
            Serum
          </a>
        </li>
        <li className="mb-4">
          <a
            className="text-gray-200 hover:text-white hover:underline"
            href="#"
          >
            Moisturizer
          </a>
        </li>
        <li>
          <a
            className="text-gray-200 hover:text-white hover:underline"
            href="#"
          >
            Sunscreen
          </a>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    // <div className="flex">
    //   <Sidebar />
    //   <div className="flex flex-col flex-1">
    //     <NavBar />
    //     {/* Add other components and content here */}
    //   </div>
    // </div>
    <div>
      <NavBar />
      <div className="flex flex-col flex-1">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

              



