import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import VisionMission from '../components/VisionMission'
import Service from '../components/Service'
import WhyChooseUs from '../components/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hertz Inno Tech</title>
        <meta name="description" content="Hertz Inno Tech - Start Digitizing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={`hit-container`}>
        <Hero />
        <Feature />
        <VisionMission />
        <Service />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
