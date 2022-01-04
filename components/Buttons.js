import styles from './Buttons.module.scss'

const Button = ({text, parentStyles}) => {
  return (
    <>
      <button type='submit' className={`${styles.BtnPrimary} ${parentStyles}`}>{text}</button>
    </>
  )
}

export { Button }
