'use client'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const CustomModal = ({ changeModalStatus }) => {
  console.log(changeModalStatus)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  useEffect(() => {
    setShow(changeModalStatus)
  }, [changeModalStatus])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ejemplo de Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contenido del modal...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CustomModal
