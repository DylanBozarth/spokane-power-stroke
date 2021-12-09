import type { NextPage } from 'next'
import Head from 'next/head'
import { MainPage } from '../components/mainpage'
const Home: NextPage = () => {
 
  return (
    <div className=" ">
      <Head>
        <title>Spokane Power Stroke</title>
        <meta name="description" content="Spokane Power Stroke" />
        <link rel="icon" href="/assets/logonew.png" />
        
    
      </Head>

      
<MainPage />
      
    </div>
  )
}

export default Home
