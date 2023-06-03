import Image from 'next/image'

const NavBar = () => {
  return (
    <div>
      <div><Image src={'/menu.png'} width={49} height={49}/></div>
      <div>Todo becas</div>
      <div></div>
    </div>
  )
}

export default NavBar
