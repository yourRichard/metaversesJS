'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.jpg"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
      <motion.div
      variants={slideIn("up","tween",0.3,1.1)}
      className='justify-center items-center mt-[-50px border-r border-l border-l-zinc-600 border-r-zinc-600 mx-auto  w-[1100px]
      h-[500px]'>
        <div className='flex justify-between mx-11 w-full  only:'>
          <div>
            <motion.h1
            variants={textVariant(1.3)}
            className="text-[80px] w-[50%] font-bold text-slate-400 drop-shadow-2xl">
              Unlock the pontential of Metaverses
            </motion.h1>
            <motion.p className='w-[50%] text-zinc-500'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam hic voluptatum eum corrupti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum temporibus nemo ipsum, non, perferendis aut reiciendis labore amet eligendi veritatis deserunt obcaecati est voluptate laudantium incidunt porro nihil fugiat quibusdam.
            </motion.p>
          </div>
          <div className='right-6 top-12 rounded-lg absolute w-[35%] h-[80%] border border-zinc-400 z-10'>
          <div className='inset-0 gradient-01 absolute z-0'/>

            <img src="/donut.png" alt="donut" className='absolute right-8 w-[900px] h-[400px]' />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;