import useUser from 'hooks/useUser'
import Image from 'next/image'

const NavBarImage = () => {
  const user = useUser()
  return (<>
    {
      user ? <Image src={user.imageUrl} height={49} width={49}/> : <Image src={'/unknow.png'} height={49} width={49}/>
    }
  </>)
}

export default NavBarImage
