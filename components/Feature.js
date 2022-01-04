import styles from './Feature.module.scss'

const Feature = () => {
  const featureData = [
    {
      "title": "Technology",
      "brief": "For what you need, we can provide the solution with our reliable technology.",
      "image": "./images/icon_main_tech.svg"
    },
    {
      "title": "Design",
      "brief": "You don't need to think about solution design, you only need your business flow and idea.",
      "image": "./images/icon_main_design.svg"
    },
    {
      "title": "Project Management",
      "brief": "Our reliable team will manage your business project from start to finish.",
      "image": "./images/icon_main_pm.svg"
    },
    {
      "title": "Creative Mind",
      "brief": "Our reliable team will manage your business project from start to finish.",
      "image": "./images/icon_main_creative.svg"
    }
  ]
  return (
    <section className={styles.Feature}>
      {
        featureData.map((feature,key) => (
          <div className={styles.Feature__Item} key={key}>
            <div className={styles.Feature__ItemImg}>
              <img src={feature.image} />
            </div>
            <div className={styles.Feature__ItemTitle}>{feature.title}</div>
            <div className={styles.Feature__ItemBrief}>{feature.brief}</div>
          </div>
        ))
      }
      
    </section>
  )
}

export default Feature
