import styles from './Service.module.scss'

const Service = () => {
  const serviceData = [
    {
      "title": "Custom Solutions",
      "brief": "Custom Solution for your business which we will develop based on your ideas.",
      "image": "./images/icon_srv_cussol.svg"
    },
    {
      "title": "UI/UX Designs for your Business",
      "brief": "Smooth, Smart and User Friendly designs for your business idea (Only Designs).",
      "image": "./images/icon_srv_uiux.svg"
    },
    {
      "title": "Business Analysis and Project Management",
      "brief": "If you don't have a Team or Sole individual for your Business Projects, don't worry, our experienced team will handle your project in time for you.",
      "image": "./images/icon_srv_ba.svg"
    },
    {
      "title": "Website for Ecommerce",
      "brief": "We provide the service of Website for E-Commerce which will help you to start selling your products in digital way. ",
      "image": "./images/icon_srv_ecom.svg"
    },
    {
      "title": "Products for SME (Coming Soon)",
      "brief": "Our premade applications will change your traditional manual way of handling things to digital and we can guarantee this will help you and your business.",
      "image": "./images/icon_srv_sme.svg"
    }
  ]
  return (
    <section className={styles.Service}>
      <h2 className={styles.Service__MainTitle}>Our Services</h2>
      <div className={styles.Service__Layout}>
        {
          serviceData.map((service,key) => (
            <div className={styles.Service__Item} key={key}>
              <div className={styles.Service__ItemImg}>
                <img src={service.image} />
              </div>
              <div className={styles.Service__ItemTitle}>{service.title}</div>
              <div className={styles.Service__ItemBrief}>{service.brief}</div>
            </div>
          ))
        }
      </div>      
    </section>
  )
}

export default Service
