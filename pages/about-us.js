import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import OurTeam from '../components/OurTeam'
import OurExperience from '../components/OurExperience'
import Ethic from '../components/Ethic'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Hertz Inno Tech - About Us</title>
        <meta name="description" content="Hertz Inno Tech - Start Digitizing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner title={'About Us'} image={'/images/img_b_about_us.jpg'} />
      <main className={`hit-container`}>
        <OurTeam />
        <Ethic />
        <OurExperience />
      </main>
      <Footer />
    </>
  )
}

