'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TypingText, StartSteps, TitleText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section
    className={`${styles.paddings} relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:'false' , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter} text-center`}
      >
        <img 
           src="/get-started.png" 
           alt="get started" 
           className="w-[70%] h-[70%] object-contain"
           />
      </motion.div>

      <motion.div
        variants={fadeIn('left' , 'tween' ,0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| متاورس چطور کار می کند" textStyles="text-[30px] pb-10" />
        <TitleText title={<> فقط با چند مورد شروع کنید</>} />

        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px] text-red-500'>
           {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
               
            />
           ))}
        </div>

      </motion.div>

    </motion.div>
     
  </section>
);

export default GetStarted;
