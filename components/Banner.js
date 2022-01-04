import styles from './Banner.module.scss'

const Banner = ({title, image}) => {
  return (
    <section id='Banner' className={styles.Banner} style={{backgroundImage: `linear-gradient(360deg, #032F61 -7.51%, rgba(3, 47, 97, 0) 125%), url(${image})`}}>
      <div className={styles.Banner__Content}>
        <h1 className={styles.Banner__Title}>{title}</h1>
      </div>
    </section>
  )
}

export default Banner
