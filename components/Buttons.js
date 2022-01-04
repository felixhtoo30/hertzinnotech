import styles from './Buttons.module.scss'

const Button = ({text, parentStyles}) => {
  return (
    <div>
      <button className={`${styles.BtnPrimary} ${parentStyles}`}>{text}</button>
    </div>
  )
}

export { Button }
