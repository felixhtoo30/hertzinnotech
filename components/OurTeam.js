import styles from './OurTeam.module.scss'

const OurTeam = () => {
  return (
    <section id="OurTeam" className={styles.OT}>
      <div className={styles.OT__Flex}>
        <div className={styles.OT__Image}>
          <img src={'/images/fig_our_team.svg'} />
        </div>
        <div className={styles.OT__Content}>
          <p className={styles.OT__ContentTitle}>Our Mission</p>
          <p className={styles.OT__ContentBody}>Hertz Inno Tech is a next generation IT Company. We founded this company to bring Business related Digital Products to help SME business success and to grow bigger than in early decades. We are a happy team and our including members are professionals who are expert in IT, Business Analysis, Project Management, Market Analysis and Customer Support.</p>
          <p className={styles.OT__ContentHighlight}>Our motto is "Start Digitizing For Every Business".</p>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
