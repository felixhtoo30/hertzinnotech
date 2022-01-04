import { useState } from 'react';
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <header className={styles.Header}>
      <div className={styles.Header__Layout}>
        <div className={`${styles.Header__Logo}`}>
          <img src='./images/hit_logo.svg' />
        </div>
        <div className={`${styles.Header__BtnMenu} ${isNavShow ? styles.Clicked : ''}`} onClick={() => setIsNavShow(!isNavShow)}>
          <div></div>
        </div>
        <div className={`${styles.Header__Nav} ${isNavShow ? styles.Show : ''}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
