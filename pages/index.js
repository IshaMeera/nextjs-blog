import Head from 'next/head';
//import Layout, { siteTitle } from './components/layout';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>Hi this is <b>Isha </b>currently learning Next js!</p>
      <p>
        (This is a sample website - you'll be building a site like this on{' '})
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>
      </p>
    </section>
  </Layout>
  );
}
