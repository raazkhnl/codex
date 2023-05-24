import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codex - A Complete Solution By The Coders, For The Coders</title>
        <meta name="description" content="A Complete Solutions By The Coders, For The Coders" />
        <meta name="keywords" content="codex, code, solution, coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script strategy='lazyOnload'>
          {/* alert("hello") */}
      </Script>
     
      <div className={styles.container}>


      <main>
        <h1 className={styles.title}>
         Codex
        </h1>

        <p className={styles.description}>
        A Complete Solutions by Coders, for Coders
        </p>

        
        <div className={styles.posts}>
          <ul>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur, aliquid ratione quisquam vel, harum itaque sint eveniet minus rerum beatae vero. Et sapiente optio pariatur in tempora culpa quam itaque dolorum.</p>
            <button>Read More</button>
          </ul>
          <ul>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
            <button>Read More</button>
          </ul><ul>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
            <button>Read More</button>
          </ul>
        </div>
      </main>

     

      <style jsx>{`
       
        
       
      `}</style>

      <style jsx global>{`
        //  main {
        //   padding: 5rem 0;
        //   flex: 1;
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
        // }
      `}</style>

    </div>
    </div>
  )
}
