import styles from 'styles/button.module.css'
const ButtonLogger = ({ supplier, onClick, children }) => {
  const supplierType = {
    Facebook: styles.buttonFb,
    Google: styles.buttonGoogle
  }
  return (
    <div>
      <button className={supplierType[supplier]} onClick={onClick}>
          {children}
      </button>
      <style jsx>{`
        button{
          border-radius : 999999px;
          border: none;
          cursor: pointer;
          color: #fff;
          background: none;
        }
        `}</style>
    </div>
  )
}

export default ButtonLogger
