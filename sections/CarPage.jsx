"use client"

import CarCanvas from "../components/canvas/Car";
import styles from "../styles";


const CarPage = () => {
  return (
    <section className={`${styles.paddings}`}>
      <CarCanvas/>
    </section>
  )
}

export default CarPage