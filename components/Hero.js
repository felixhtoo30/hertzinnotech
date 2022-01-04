import styles from './Hero.module.scss'
import { Button } from './Buttons'
import { HeroCircle, HeroConLine } from './Patterns'

const Hero = () => {
  return (
    <section id='Hero' className={styles.Hero}>
      {/* <HeroCircle 
        parentClasses={`${styles.Hero__Circle} ${styles.TxtTop}`} 
        parentStyles={{ top: '110px', left: '120px', background: '#f2dd27' }} 
        text={'Charity'} />
      <HeroConLine sx={120} sy={10} ex={10} ey={10} />
      <HeroCircle 
        parentClasses={`${styles.Hero__Circle} ${styles.TxtTop}`} 
        parentStyles={{ top: '180px', right: '120px', background: '#e22525' }} 
        text={'Passion'} /> */}
      {/* <HeroCircle 
        parentClasses={`${styles.Hero__Circle} ${styles.TxtTop}`} 
        parentStyles={{ top: '10%', left: '18%', background: '#f2dd27' }} 
        text={'Charity'} />
      <HeroConLine />
      <HeroCircle 
        parentClasses={`${styles.Hero__Circle} ${styles.TxtTop}`} 
        parentStyles={{ top: '25%', right: '18%', background: '#e22525' }} 
        text={'Passion'} /> 
      <HeroCircle 
        parentClasses={`${styles.Hero__Circle} ${styles.TxtBot}`} 
        parentStyles={{ bottom: '25%', right: '18%', background: '#05cb0a' }} 
        text={'Education'} />
      <HeroCircle 
        parentClasses={`${styles.Hero__Circle} ${styles.TxtBot}`} 
        parentStyles={{ bottom: '10%', left: '18%', background: '#2056cf' }} 
        text={'Intelligence'} /> */}
      <div className={styles.Hero__Content}>
        <h1 className={styles.Hero__Title}>Hertz Inno Tech</h1>
        <h3 className={styles.Hero__Tagline}>Start Digitizing</h3>
        <Button text={'Contact Us'} parentStyles={styles.Hero__Btn} />
      </div>
    </section>
  )
}

export default Hero
