import NavBarImage from 'components/NavBarImage'
import Image from 'next/image'
import styles from 'styles/navbar/navbar.module.css'
const NavBar = () => {
  return (
    <div className={styles.navigator}>
      <NavBarImage className={styles.userImage}/>
      <h3 className={styles.h3}>Todo becas</h3>
      <Image src={'/menu.png'} width={29} height={29} className={styles.img} alt='hamburguer menu'/>
    </div>
  )
}

export default NavBar
