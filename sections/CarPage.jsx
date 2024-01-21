"use client"

import CarCanvas from "../components/canvas/Car";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer, textContainer, textVariant, textVariant2 } from "../utils/motion";


const CarPage = () => {
  return (
    <section className={`${styles.paddings} inset-0`}>
    <div className="text-center">
    <motion.div
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:1}}>
    <h1 className="text-3xl font-bold text-white">Powered by Toyata</h1>
      <span className="text-slate-300">Explore with <span className="font-bold text-slate-100">Supra</span> everyday,everywhere.</span>
    </motion.div>
    </div>
      <CarCanvas/>
      <motion.p
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:1}}
       className="text-center text-white">
        Did you know ? <span className="ml-1 text-xs text-zinc-400">   you can rotate the car</span>
      </motion.p>
    </section>
  )
}

export default CarPage