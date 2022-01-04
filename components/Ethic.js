import styles from './Ethic.module.scss'

const Ethic = () => {
  const ethicData = [
    {
      "title": "Grow Together",
      "brief": "You have an idea for your business but don't know what to do. Don't worry, you have come to the right place. We can provide the techology for your buisness to make alive your ideas. Your idea and our technology will become one and grow together.",
      "image": "./images/icon_t_grow.svg"
    },
    {
      "title": "Digital Consultancy",
      "brief": "Consulting is part of our team specialities. Before starting your business, we can  discuss whether your idea is available for technology or good for market trend. We are your truly consultant.",
      "image": "./images/icon_t_consult.svg"
    },
    {
      "title": "Brain Storming",
      "brief": "Brain storming within our team and help you grow your business in digital way. Our professional team will handle best market strategy and bring you the best qualified digital products.",
      "image": "./images/icon_t_brstorm.svg"
    }
  ]
  return (
    <section className={styles.Ethic}>
      {
        ethicData.map((ethic,key) => (
          <div className={styles.Ethic__Item} key={key}>
            <div className={styles.Ethic__ItemImg}>
              <img src={ethic.image} />
            </div>
            <p className={styles.Ethic__ItemTitle}>{ethic.title}</p>
            <p className={styles.Ethic__ItemBrief}>{ethic.brief}</p>
          </div>
        ))
      }
      
    </section>
  )
}

export default Ethic
