'use client'
import { GET_SCHOLARSHIPS } from 'utils/links'
import React, { useState, useEffect } from 'react'
import ScholarShip from './ScholarShip'
import useUser from 'hooks/useUser'
import styles from 'styles/scholarShip/card.module.css'

const ScholarShips = () => {
  const [scholarships, setScholarships] = useState()
  const user = useUser()

  useEffect(() => {
    fetch(GET_SCHOLARSHIPS)
      .then((res) => res.json())
      .then(setScholarships)
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <h3 className={styles.title}>Bienvenido {user?.name}, estas son las becas activas y aplicables.</h3>
      {scholarships
        ? (
            scholarships.map((scholarship) => (
          <ScholarShip
            key={scholarship.id}
            scholarshipUrl={scholarship.scholship_link}
            imgLink={scholarship.img_link}
            title={scholarship.title}
          />
            ))
          )
        : (
        <h3>No hay becas disponibles</h3>
          )}
    </>
  )
}

export default ScholarShips
