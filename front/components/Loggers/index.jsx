'use client'
import ButtonLogger from 'components/ButtonLogger'
import useUser from 'hooks/useUser'
import Image from 'next/image'
import { loginWithFacebook, loginWithGoogle } from 'fbase/logins'

const Loggers = () => {
  const user = useUser()

  return (
    <div>
      {user === undefined && <span>Cargando...</span>}
      {user === null && (
        <div className="buttons-loggers">
          <ButtonLogger onClick={loginWithFacebook} supplier={'Facebook'}>
            <Image src={'/facebookLogo.png'} width={39} height={39} alt='logo para iniciar sesión con facebook'></Image>
          </ButtonLogger>
          <ButtonLogger onClick={loginWithGoogle} supplier={'Google'}>
            <Image src={'/googleLogo.png'} width={39} height={39} alt='logo para iniciar sesión con google'></Image>
          </ButtonLogger>
        </div>
      )}
      {user && user.name && <div>Bienvenido {user.name}</div>}
      <style jsx>{`
        .buttons-loggers{
          display: flex;
          justify-content: center;
          gap: 1em;
        }
        `}</style>
    </div>
  )
}

export default Loggers
