import styles from './WhyChooseUs.module.scss'

const WhyChooseUs = () => {
  return (
    <section id="WhyChooseUs" className={styles.WCU}>
      <div className={styles.WCU__Flex}>
        <div className={styles.WCU__Image}>
          <img src={'./images/fig_why_choose_us.svg'} />
        </div>
        <div className={styles.WCU__Content}>
          <p className={styles.WCU__ContentTitle}>Why Choose Us?</p>
          <p className={styles.WCU__ContentHighlight}>Because we know how to make your business grow through digitizing. </p>
          <p className={styles.WCU__ContentBody}>We also know how manual work are not as easy as well developed digitized business. Plus, we are professionals in Business Related IT industry for quite a long time. We bring our diverse background of design, branding, technology for you and your business.<br/>Our company slogan says it all, we are commited to transform your business into Digital Process. Not only your business will look great - they will get results. </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
