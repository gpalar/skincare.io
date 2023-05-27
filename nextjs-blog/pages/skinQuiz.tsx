import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function skinQuiz() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Take the Skin Quiz</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>

                <div className="max-w-screen-lg mx-auto p-8">
                    <div className="grid grid-cols-2 gap-40 ">
                        <div className="grid grid-cols-2 gap-10 mt-12 ">
                            <div className="w-40 h-50 shadow-lg p-8 rounded-xl bg-yellow-300"></div>
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-red-300"></div>
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-green-300"></div>
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-indigo-300"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-12">
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-yellow-300"></div>
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-red-300"></div>
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-green-300"></div>
                            <div className="w-40 h-40 shadow-lg p-8 rounded-xl bg-indigo-300"></div>
                        </div>
                    </div>
                </div>

                <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}</style>
            </div>
        </>

    );
}