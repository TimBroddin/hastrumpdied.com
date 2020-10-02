import Head from "next/head";
import styles from "../styles/Home.module.css";
import { sample } from "lodash";

Home.getInitialProps = async (ctx) => {
  const negative = [
    "No",
    "Nope",
    "Nopes",
    "Not yet",
    "Negative",
    "He hasn't",
    "Nay",
    "Nae",
    "No siree",
  ];
  const positive = ["Yes"];
  return { answer: sample(negative) };
};

export default function Home({ answer }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Has Trump died?</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Informative website for people wondering if POTUS Donald Trump has died."
        />
        <meta property="og:title" content="Has Trump died?" />
        <meta
          property="og:description"
          content="Informative website for people wondering if POTUS Donald Trump has died."
        />
        <meta property="og:url" content="https://hastrumpdied.com" />
        <meta
          property="og:image"
          content="https://hastrumpdied.com/og.jpg?v2"
        />
        <script
          async
          defer
          data-domain="hastrumpdied.com"
          src="https://stats.broddin.be/js/plausible.js"
        ></script>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{answer}.</h1>
        <img
          width="300"
          height="300"
          src="/lelijkhoofd.png"
          alt="Mannekes, wat ne lelijke kop."
        />
      </main>
      <footer className={styles.footer}>
        <a href="https://broddin.be" target="_blank" rel="noopener noreferrer">
          😘
        </a>
      </footer>
    </div>
  );
}
