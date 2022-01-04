import styles from './Contact.module.scss'

const Contact = ({text, parentStyles}) => {
  return (
    <section className={styles.Contact}>
        <div className={styles.Contact__Info}>
          <h1 className={styles.Contact__InfoTitle}>Contact Info</h1>
          <p className={styles.Contact__InfoText}><a href="tel:+959-408700405"><img src={'/images/icon_ph.png'} />+959-408700405</a></p>
          <p className={styles.Contact__InfoText}><a href="mailto:info@hertzinnotech.com"><img src={'/images/icon_mail.png'} />info@hertzinnotech.com</a></p>
          <hr />
          <ul className={styles.Contact__InfoSocial}>
            <li><a href="//facebook.com/hertzinnotech"><img src={'/images/icon_f_facebook.png'} />facebook.com/hertzinnotech</a></li>
            <li><a href="//linkedin.com/in/hertzinnotech"><img src={'/images/icon_f_linkedin.png'} />linkedin.com/in/hertzinnotech</a></li>
            <li><a href="skype:live:hertzinnotech"><img src={'/images/icon_f_skype.png'} />live:hertzinnotech</a></li>
            <li><a href="//wa.me/+959408700405"><img src={'/images/icon_f_whatsapp.png'} />+959408700405</a></li>
            <li><a href="viber://chat?number=09408700405"><img src={'/images/icon_f_viber.png'} />+959408700405</a></li>
            <li><a href="//telegram.me/+959408700405"><img src={'/images/icon_f_telegram.png'} />+959408700405</a></li>
          </ul>
        </div>
        <div className={styles.Contact__Form}>
          <h1 className={styles.Contact__FormTitle}>Keep in Touch</h1>
          <p className={styles.Contact__FormSubtitle}>We are here for you. Need Help?</p>
          <form>
            <label>Name</label>
            <input type="text" className={styles.Contact__FormInput} />
            <label>Email</label>
            <input type="email" className={styles.Contact__FormInput} />
            <label>Message</label>
            <textarea className={styles.Contact__FormInput} />
            <div className={styles.Contact__FormBtnWrapper}>
              <button type="submit">Contact Us</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact