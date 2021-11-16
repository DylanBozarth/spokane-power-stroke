import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from './components/navbar'
import { MainPage } from './mainpage'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Spokane Power Stroke</title>
        <meta name="description" content="Spokane Power Stroke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
<MainPage />
      
    </div>
  )
}

export default Home
