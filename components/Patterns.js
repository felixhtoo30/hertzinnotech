import styles from './Patterns.module.scss'

const HeroCircle = ({text, parentClasses, parentStyles}) => {
  return (
    <div className={`${styles.Circle} ${parentClasses}`} style={parentStyles}>
      <p className={styles.Circle__Text}>{text}</p>
    </div>
  )
}

const HeroConLine = ({sx, sy, ex, ey}) => {
  return (
    <svg style={{position: 'absolute', top: '0', left: '0', bottom: '0', width: '100%', height: '100vh'}} viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg">
      <polyline points={`${sx},${sy} ${ex},${ey}`} fill="none" stroke="black" />
    </svg>
    // <div style={{position: 'absolute', top: '14%', left: '22%', width: '1px', height: '50%', backgroundColor: 'black', transform: 'rotate(-73deg)', transformOrigin: '0 0'}}></div>
  )
}

// const TxtBotCircle = ({text, parentStyles}) => {
//   return (
//     <div>
//       <button className={`${styles.BtnPrimary} ${parentStyles}`}>{text}</button>
//     </div>
//   )
// }

export { HeroCircle, HeroConLine }
