import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Layout}>
        <p className={styles.Footer__Title}>Contact Us</p>
        <ul className={styles.Footer__ContactInfo}>
          <li><a href="mailto:info@hertzinnotech.com"><img src={'/images/icon_mail.png'} />info@hertzinnotech.com</a></li>
          <li><a href="tel:+959-408700405"><img src={'/images/icon_ph.png'} />+959-408700405</a></li>
        </ul>
        <div className={styles.Footer__Social}>
          <a href="//facebook.com/hertzinnotech"><img src={'/images/icon_f_facebook.png'} /></a>
          <a href="//linkedin.com/in/hertzinnotech"><img src={'/images/icon_f_linkedin.png'} /></a>
          <a href="//wa.me/+959408700405"><img src={'/images/icon_f_whatsapp.png'} /></a>
          <a href="skype:live:hertzinnotech"><img src={'/images/icon_f_skype.png'} /></a>
          <a href="viber://chat?number=09408700405"><img src={'/images/icon_f_viber.png'} /></a>
          <a href="//telegram.me/+959408700405"><img src={'/images/icon_f_telegram.png'} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
