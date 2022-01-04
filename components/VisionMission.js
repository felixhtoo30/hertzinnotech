import styles from './VisionMission.module.scss'

const VisionMission = () => {
  return (
    <section id="VisionMission" className={styles.VM}>
      <div className={styles.VM__Flex}>
        <div className={styles.VM__Image}>
          <img src={'./images/fig_our_mission.svg'} />
        </div>
        <div className={styles.VM__Content}>
          <p className={styles.VM__ContentTitle}>Our Mission</p>
          <p className={styles.VM__ContentBody}>Our mission is to provide the technology and teachings to the next IT Generation and we hope this will bring Experience and Knowledge to them for further growing in IT Industry.</p>
        </div>
      </div>
      <div className={styles.VM__Flex}>
        <div className={styles.VM__Image}>
          <img src={'./images/fig_our_vision.svg'} />
        </div>
        <div className={styles.VM__Content}>
          <p className={styles.VM__ContentTitle}>Our Vision</p>
          <p className={styles.VM__ContentBody}>
          We focus on digitizing for SME businesses in order to make their business related workloads from traditional manual way to digital process and we certain that this will help them grow more.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
