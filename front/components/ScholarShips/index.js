'use client'
import { GET_SCHOLARSHIPS } from 'utils/links'
import React, { useState, useEffect } from 'react'
import ScholarShip from './ScholarShip'
import useUser from 'hooks/useUser'
import styles from 'styles/scholarShip/card.module.css'
import CustomModal from 'components/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

const ScholarShips = () => {
  const [scholarships, setScholarships] = useState()
  const [modal, setModal] = useState(false)
  const user = useUser()
  console.log(scholarships)

  useEffect(() => {
    fetch(GET_SCHOLARSHIPS)
      .then((res) => res.json())
      .then(setScholarships)
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    if (user?.isNewUser) {
      setModal(true)
    }
  }, [])

  return (
    <>
      <h3 className={styles.title}>
        Bienvenido {user?.name}, estas son las becas activas y aplicables.
      </h3>
      {scholarships
        ? (
            scholarships.map((scholarship) => (
          <ScholarShip
            key={scholarship.id}
            scholarshipUrl={scholarship.scholship_link}
            imgLink={scholarship.img_link}
            title={scholarship.title}
            city={scholarship.city}
            country={scholarship.country}
            deadline={scholarship.deadline}
          />
            ))
          )
        : (
        <h3>No hay becas disponibles</h3>
          )}

        <CustomModal
        changeModalStatus={modal}
        />
    </>
  )
}

export default ScholarShips
