import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SkinQuizBtn from '../components/SkinQuizBtn'
// import RiCactusLine from 'react-icons/ri'

const navigation = [
    { name: 'Skincare.io', href: '/', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function skinQuiz() {
    // skintype
    const [oily, setOily] = useState(false)
    const [sensitive, setSensitive] = useState(false)
    const [dry, setDry] = useState(false)
    // skin goals
    const [uv, setUv] = useState(false)
    const [antiAging, setAntiAging] = useState(false)
    const [brightening, setBrightening] = useState(false)
    const [acne, setAcne] = useState(false)

    return (
        <>
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
                                            className=" h-8 w-auto"
                                            src="/sparkle-logo.png"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="sm:ml-6 sm:block">
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

            <div className={styles.container}>
                {/* <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-current w-6 h-6 mr-2">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>

                    <Link href="/">Back to home</Link>
                </button> */}

                <h1 className={styles.title}>Skin Quiz</h1>

                <div className="max-w-screen-lg mx-auto p-8 ">
                    <div className="grid grid-rows-2 gap-20">
                        <div>
                            <h1 className="text-2xl">Choose your skin type</h1>
                            <div className="grid grid-cols-4 gap-10 mt-12">
                                <SkinQuizBtn
                                    value={oily}
                                    setState={setOily}
                                    text="Oily"
                                    color="blue"
                                // icon={RiCactusLine}
                                />
                                <SkinQuizBtn
                                    value={dry}
                                    setState={setDry}
                                    text="Dry"
                                    color="purple"
                                // icon={RiCactusLine}
                                />
                                <SkinQuizBtn
                                    value={sensitive}
                                    setState={setSensitive}
                                    text="Sensitive"
                                    color="purple"
                                // icon={RiCactusLine}
                                />
                                <div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <h1 className="text-2xl">Your skin needs</h1>
                            <div className="grid grid-cols-4 gap-10 mt-12">
                                <SkinQuizBtn
                                    value={acne}
                                    setState={setAcne}
                                    text="Acne"
                                    color="blue"
                                // icon={RiCactusLine}
                                />
                                <SkinQuizBtn
                                    value={antiAging}
                                    setState={setAntiAging}
                                    text="Anti-Aging"
                                    color="purple"
                                // icon={RiCactusLine}
                                />
                                <SkinQuizBtn
                                    value={brightening}
                                    setState={setBrightening}
                                    text="Brightening"
                                    color="purple"
                                // icon={RiCactusLine}
                                />
                                <SkinQuizBtn
                                    value={uv}
                                    setState={setUv}
                                    text="UV"
                                    color="purple"
                                // icon={RiCactusLine}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                    </svg>
                    <Link href="/resultsPage">Next</Link>
                </button>

                <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
    
                background-color: #fffbef;
                }
                * {
                box-sizing: border-box;
                }
            `}</style>
            </div>

        </>

    );
}


// import * as React from 'react';
// import { useState } from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Link from 'next/link';
// import styles from '../styles/Home.module.css';
// import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//     { name: 'Skincare.io', href: '/', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


// export default function skinQuiz() {

//     // skintype
//     const [oily, setOily] = useState(false)
//     const [sensitive, setSensitive] = useState(false)
//     const [dry, setDry] = useState(false)
//     // skin goals
//     const [uv, setUv] = useState(false)
//     const [antiAging, setAntiAging] = useState(false)
//     const [brightening, setBrightening] = useState(false)
//     const [acne, setAcne] = useState(false)

//     return (
//         <>
//             <Disclosure as="nav" className="bg-sage-green">
//                 {({ open }) => (
//                     <>
//                         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                             <div className="relative flex h-16 items-center justify-between">
//                                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                                     {/* Mobile menu button*/}
//                                     <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                         <span className="sr-only">Open main menu</span>
//                                         {open ? (
//                                             <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                                         ) : (
//                                             <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                                         )}
//                                     </Disclosure.Button>
//                                 </div>
//                                 <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                                     <div className="flex flex-shrink-0 items-center">
//                                         <img
//                                             className=" h-8 w-auto"
//                                             src="/sparkle-logo.png"
//                                             alt="Your Company"
//                                         />
//                                     </div>
//                                     <div className="sm:ml-6 sm:block">
//                                         <div className="flex space-x-4">
//                                             {navigation.map((item) => (
//                                                 <a
//                                                     key={item.name}
//                                                     href={item.href}
//                                                     className={classNames(
//                                                         //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                                         item.current ? 'bg-sage-green text-white' : 'bg-sage-green text-white',
//                                                         'rounded-md px-3 py-2 text-xl font-medium font-sans'
//                                                     )}
//                                                     aria-current={item.current ? 'page' : undefined}
//                                                 >
//                                                     {item.name}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         <Disclosure.Panel className="sm:hidden">
//                             <div className="space-y-1 px-2 pb-3 pt-2">
//                                 {navigation.map((item) => (
//                                     <Disclosure.Button
//                                         key={item.name}
//                                         as="a"
//                                         href={item.href}
//                                         className={classNames(
//                                             item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                             'block rounded-md px-3 py-2 text-base font-medium'
//                                         )}
//                                         aria-current={item.current ? 'page' : undefined}
//                                     >
//                                         {item.name}
//                                     </Disclosure.Button>
//                                 ))}
//                             </div>
//                         </Disclosure.Panel>
//                     </>
//                 )}
//             </Disclosure>

//             <div className={styles.container}>
//                 {/* <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-current w-6 h-6 mr-2">
//   <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
//   <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
// </svg>

//                     <Link href="/">Back to home</Link>
//                 </button> */}

//                 <h1 className={styles.title}>Skin Quiz</h1>

//                 <div className="max-w-screen-lg mx-auto p-8">
//                     <div className="grid grid-cols-2 gap-40 ">
//                         <div>
//                             <p className={styles.description}>
//                                 Skin Type
//                             </p>
//                             <div className="grid grid-cols-2 gap-10 mt-12 ">

//                                 <button className="w-40 h-50 shadow-lg p-8 rounded-xl bg-baby-green hover:bg-gray-400 text-black font-bold">
//                                     Oily
//                                 </button>
//                                 <button className="w-40 h-40 shadow-lg p-8 rounded-xl bg-light-medium-green hover:bg-gray-400 text-black font-bold ">
//                                     Sensitive
//                                 </button>
//                                 <button className="w-40 h-40 shadow-lg p-8 rounded-xl bg-medium-green hover:bg-gray-400 text-black font-bold ">
//                                     Dry
//                                 </button>
//                             </div>
//                         </div>
//                         <div>
//                             <p className={styles.description}>
//                                 Skin Goals
//                             </p>
//                             <div className="grid grid-cols-2 gap-10 mt-12">
//                                 <button className="w-40 h-40 shadow-lg p-8 rounded-xl bg-light-purple hover:bg-gray-400 text-black font-bold ">
//                                     UV
//                                 </button>
//                                 <button className="w-40 h-40 shadow-lg p-8 rounded-xl bg-light-medium-purple hover:bg-gray-400 text-black font-bold ">
//                                     Anti-Aging
//                                 </button>
//                                 <button className="w-40 h-40 shadow-lg p-8 rounded-xl bg-dark-purple hover:bg-gray-400 text-black font-bold ">
//                                     Brightening
//                                 </button>
//                                 <button className="w-40 h-40 shadow-lg p-8 rounded-xl bg-light-light-purple hover:bg-gray-400 text-black font-bold ">
//                                     Acne
//                                 </button>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//                     <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                         <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
//                     </svg>
//                     <Link href="/resultsPage">Next</Link>
//                 </button>

//                 <style jsx global>{`
//                 html,
//                 body {
//                 padding: 0;
//                 margin: 0;
//                 font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//                     Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//                     sans-serif;
//                 // font-family: "DomaineDisplayNarrow",Georgia,serif;
//                 background-color: #fffbef;
//                 }
//                 * {
//                 box-sizing: border-box;
//                 }
//             `}</style>
//             </div>

//         </>

//     );
// }