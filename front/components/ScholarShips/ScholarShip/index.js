import Image from 'next/image'
import styles from 'styles/scholarShip/card.module.css'

const BASE_URL = 'https://web.icetex.gov.co/'
const ScholarShip = ({ id, scholarshipUrl, imgLink, title, state }) => {
  return (
    <a id={id} className={styles.container} href={scholarshipUrl} target="_blank" rel='noreferrer'>
      <div>
        <Image src={BASE_URL + imgLink} height={120} width={120} alt={title}/>
      </div>
      <div>{title}</div>
    </a>
  )
}

export default ScholarShip
