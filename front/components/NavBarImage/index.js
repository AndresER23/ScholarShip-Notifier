'use client'
import useUser from 'hooks/useUser'
import Image from 'next/image'

const NavBarImage = ({ className }) => {
  const user = useUser()
  return (<>
    {
      user
        ? <Image alt="User image, trrieved from the session"
      src={user.imageUrl} height={30} width={30} className={className}/>
        : <Image src={'/unknow.png'} height={49} width={49} alt="default image when the user is not logged"/>
    }
  </>)
}

export default NavBarImage
