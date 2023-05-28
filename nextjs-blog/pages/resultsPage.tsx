import 'flowbite'
import React, { useRef } from 'react';
import Product from '../components/product';

const navigation = [
  { name: 'Skincare.io', href: '/', current: false },
]

function TempProducts() {
  return (
    <div>
      <Product
        src={"https://incidecoder-content.storage.googleapis.com/9cfe400f-c4bf-47bf-8972-f5b36c57f1d6/products/eve-lom-cleanser/eve-lom-cleanser_front_photo_original.jpeg"}
        title="Cleanser"
        tags={['good for oily skin', 'acne-friendly', 'brightening', 'good for sensitive skin']}
      />
    </div>
  );
};


function Row() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="flex items-center justify-center h-64 rounded bg-gray-50 dark:bg-gray-800">
        <TempProducts />
        <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
      </div>
      <div className="flex items-center justify-center h-64 rounded bg-gray-50 dark:bg-gray-800">
        <TempProducts />
        <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
      </div>
      <div className="flex items-center justify-center h-64 rounded bg-gray-50 dark:bg-gray-800">
        <TempProducts />
        <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
      </div>
    </div>
  );
};



export default function resultsPage() {
  return (
    <>
      <>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a href="/" className="bg-sage-green flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                  <img className="w-8 h-8" src="sparkle-logo.png" />
                  <span className="ml-3">Skincare.io</span>

                </a>
              </li>
              <li>
                <a href="#Cleanser" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img className=" w-8 h-8" src="\cleanser.png"></img>
                  <span className="flex-1 ml-3 whitespace-nowrap">Cleanser</span>
                </a>
              </li>
              <li>
                <a href="#Toner" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img className=" w-8 h-8" src="\toner.png"></img>
                  <span className="flex-1 ml-3 whitespace-nowrap">Toner</span>
                </a>
              </li>
              <li>
                <a href="#Serum" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img className=" w-8 h-8" src="\serum.png"></img>
                  <span className="flex-1 ml-3 whitespace-nowrap">Serum</span>
                </a>
              </li>
              <li>
                <a href="#Moisturizer" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img className=" w-8 h-8" src="\moisturizer.png"></img>
                  <span className="flex-1 ml-3 whitespace-nowrap">Moisturizer</span>
                </a>
              </li>
              <li>
                <a href="#Sunscreen" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img className=" w-8 h-8" src="\sunscreen.png"></img>
                  <span className="flex-1 ml-3 whitespace-nowrap">Sunscreen</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div>
              <div id="Cleanser" style={{ padding: '1px', paddingLeft: '10px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Cleanser</h1>
              </div>
              <Row />

              <div id="Toner" style={{ padding: '1px', paddingLeft: '10px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Toner</h1>
              </div>
              <Row />

              <div id="Serum" style={{ padding: '1px', paddingLeft: '10px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Serum</h1>
              </div>
              <Row />

              <div id="Moisturizer" style={{ padding: '1px', paddingLeft: '10px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Moisturizer</h1>
              </div>
              <Row />

              <div id="Sunscreen" style={{ padding: '1px', paddingLeft: '10px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Sunscreen</h1>
              </div>
              <Row />

            </div>

          </div>
        </div>
      </>
    </>
  );
}