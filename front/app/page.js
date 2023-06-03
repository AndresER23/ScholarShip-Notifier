import Image from 'next/image'
import Loggers from 'components/Loggers'
import styles from 'styles/page/index.module.css'
export default function Home () {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={'/pageLogo.png'}
          width={220}
          height={220}
          alt="TodoBecas logo"
        ></Image>
      </div>
      <div>
        <h2 className={styles.h2}>Bienvenido</h2>
      </div>
      <section className={styles.section}>
        <div>
          <h3 className={styles.h3}>Inicia sesión o registrate</h3>
        </div>
        <Loggers />
      </section>
    </div>
  )
}
