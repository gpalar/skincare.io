import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col mx-auto ">
          <div className="flex flex-row">
            <img className="pl-6 py-6 h-28 w-64" src="skincare.io.png" />
            {/* <img className="pl-6 py-6 h-10 w-10" src="FiSmile.png" /> */}
          </div>
          <p> Discover your custom skincare routine </p>
        </div>

        <div className={styles.grid}>
          <a href="/skinQuiz"
            className=''
          ><div className='w-32 bg-light-med-purple rounded-full border-2 border-light-med-purple text-center hover:border-2 hover:border-dark-purple'
          >GET STARTED</div>
          </a>
        </div>
      </main>

      <footer>
        Made with ♡
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color: #F6EFEA;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
