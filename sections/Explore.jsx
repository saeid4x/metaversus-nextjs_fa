'use client';


import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText, ExploreCard, TitleText } from '../components';
import {exploreWorlds} from '../constants'



const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false , amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col text-center`}
      >
        <TypingText title="| جهان " textStyles="text-center text-[30px] pb-10" />
        <TitleText 
           title={<> به دنیایی جدید با قابلیت های بی نظیر <br className='md:block hidden' /> سفر کنید</>}
           textStyles="text-center"
           />
  
           <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 '>
              {exploreWorlds.map((world, index) => (
                <ExploreCard  
                      key={index}
                      {...world}
                      index={index}
                      active={active}
                      handleClick={setActive}
                      />
              ))}
           </div>
  
  
      </motion.div>     
    </section>
  );
}

export default Explore;
