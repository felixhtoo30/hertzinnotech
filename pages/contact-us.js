import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Hertz Inno Tech - Contact Us</title>
        <meta name="description" content="Hertz Inno Tech - Start Digitizing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner title={'Contact Us'} image={'./images/img_b_contact_us.jpg'} />
      <main className={`hit-container`}>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
