import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Walsh College Vlabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Click the link to access Vlabs" />
        <p className="description">
          <a href="bit.ly/vlabswalshcollege">vlabs.walshcollege.edu</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
