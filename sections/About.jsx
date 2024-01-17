'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import {TypingText} from '../components'
import { fadeIn,staggerContainer } from "../utils/motion";


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
        <TypingText
        title="| About Metaverses"
        textStyles="text-center"/>
        <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className="mt-[8px] text-[20px] sm:text-[32px] text-center text-secondary-white">
            <span className="font-extrabold text-white">Metaverse</span>  represents a revolutionary paradigm shift in our digital experience, transcending traditional boundaries and ushering us into a <span className="font-extrabold text-white">new </span>era of interconnected virtual worlds. In essence, it is a collective virtual shared space that <span className="font-extrabold text-white">combines</span> aspects of social media, online gaming, augmented reality, and virtual reality.Let's explore the metaverse by scrolling down.
        </motion.p>
        <motion.img
        variants={fadeIn('up','tween',0.3,1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] cursor-pointer"/>
      </motion.div>
  </section>
);

export default About;
