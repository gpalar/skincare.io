import * as React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Skincare.io', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-sage-green">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/sparkle-logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          item.current ? 'bg-sage-green text-white' : 'bg-sage-green text-white',
                          'rounded-md px-3 py-2 text-xl font-medium font-sans'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
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



// import React from "react";

// function NavBar() {
//   return (
//     <nav className="bg-white shadow">
//       <div className="container mx-auto px-6 py-3">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <a
//                 className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
//                 href="#"
//               >
//                 Skincare.io
//               </a>
//               <div className="md:hidden">
//                 <button
//                   type="button"
//                   className="block text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 focus:text-gray-700 dark:focus:text-gray-100 focus:outline-none"
//                 >
//                 </button>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <ul className="flex ml-4">
//                 <li className="mr-3">
//                   <a
//                     className="text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 px-2 py-1"
//                     href="#"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="mr-3">
//                   <a
//                     className="text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 px-2 py-1"
//                     href="#"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li className="mr-3">
//                   <a
//                     className="text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 px-2 py-1"
//                     href="#"
//                   >
//                     Services
//                   </a>
//                 </li>
//                 <li className="mr-3">
//                   <a
//                     className="text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 px-2 py-1"
//                     href="#"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex items-center mt-3 md:mt-0">
//             <button
//               className="hidden md:block text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100 mr-3"
//               aria-label="Show notifications"
//             >
//               <svg
//                 className="w-6 h-6 fill-current"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   className="heroicon-ui"
//                   d="M11 21H6a2 2 0 0 1-2-2v-7a5 5 0 0 1 4-4.9V7a7 7 0 0 1 14 0v2.1a5 5 0 0 1 4 4.9v7a2 2 0 0 1-2 2h-5m-1 0h-4"
//                 />
//               </svg>
//             </button>

//             <div className="flex sm:items-center">
//               <div className="relative">
//                 <button
//                   className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
//                   id="user-menu"
//                   aria-label="User menu"
//                   aria-haspopup="true"
//                 >
//                   <img
//                     className="h-8 w-8 rounded-full"
//                     src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
//                     alt="user profile"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Sidebar() {
//   return (
//     <div className="bg-pretty-blue py-4 px-2">
//       <ul className="flex flex-col">
//         <li className="mb-4">
//           <a
//             className="text-gray-200 hover:text-white hover:underline"
//             href="#"
//           >
//             Dashboard
//           </a>
//         </li>
//         <li className="mb-4">
//           <a
//             className="text-gray-200 hover:text-white hover:underline"
//             href="#"
//           >
//             Projects
//           </a>
//         </li>
//         <li className="mb-4">
//           <a
//             className="text-gray-200 hover:text-white hover:underline"
//             href="#"
//           >
//             Reports
//           </a>
//         </li>
//         <li className="mb-4">
//           <a
//             className="text-gray-200 hover:text-white hover:underline"
//             href="#"
//           >
//             Calendar
//           </a>
//         </li>
//         <li className="mb-4">
//           <a
//             className="text-gray-200 hover:text-white hover:underline"
//             href="#"
//           >
//             Team
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-200 hover:text-white hover:underline"
//             href="#"
//           >
//             Documents
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <NavBar />
//         {/* Add other components and content here */}
//       </div>
//     </div>
//   );
// }

// export default App;

              



