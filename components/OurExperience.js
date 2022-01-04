import styles from './OurExperience.module.scss'

const OurExperience = () => {
  return (
    <section id="OurExperience" className={styles.OX}>
      <div className={styles.OX__Flex}>
        <div className={styles.OX__Image}>
          <img src={'/images/fig_our_experience.svg'} />
        </div>
        <div className={styles.OX__Content}>
          <p className={styles.OX__ContentTitle}>Our Experiences</p>
          <p className={styles.OX__ContentBody}>Hertz Inno Tech is founded with experienced team members who are expert in Technology, Market Research, Market Analysis, Business Analysis, Project Management and Customer Support. When it comes to developing new products which are trendy on market, our team never tired of brainstorming and making these. Each of us have done many projects to help the business in multiple ways. We can assure your business become success with our experiences, technology and innovative ideas.</p>
        </div>
      </div>
    </section>
  )
}

export default OurExperience
