'use client';


import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';


const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className='gradient-02 z-0'  />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText 
           title="| درباره Metaversus "
           textStyles="text-center"
           />

           <motion.p
             variants={fadeIn('up' , 'tween' , 0.2 , 1)}
             className="about-txt mt-[8px] font-normal sm:text-[30px] text-[20px] text-center text-secondary-white leading-[50px]"
           >
               
               <span className='font-extrabold text-white  about-txt'>
                   متاورس  &nbsp;               
                </span>  

                    دنیای جدید و شگفت‌انگیزی و درواقع یک مکان مجازی است که به کاربران اجازه می‌دهد در یک محیط دیجیتالی با افراد واقعی تعامل داشته باشند. دنیای متاورس را می‌توان به‌عنوان یک اینترنت تجسم‌یافته در نظر بگیریم که به‌جای آنکه تنها به آن نگاه کنیم، درواقع در آن حضور داشته باشیم
تصور کنید بتوانید بدون آنکه جای خود را ترک کنید، به هر جایی که دوست داشته باشید بروید (آسمان، زمین و دریا) و همان‌طور که می‌خواهید ظاهر شوید، کار کنید و درآمد داشته باشید

              
                  
               <span className='font-extrabold text-white about-txt'>
               &nbsp;  جنون متاورس &nbsp;              
                </span>  

               اکنون با استفاده از

                 <span className='font-extrabold text-white about-txt'>
                 &nbsp;  واقعیت مجازی  &nbsp;           
                </span>  

                   رویاها تبدیل به واقعیت می شوند  

                   <span className='font-extrabold text-white about-txt'>
                   &nbsp;   برای اطلاع از قابلیت های متاورس   &nbsp;            
                  </span> 

                 این صفحه را تا انتها مشاهده کنید

           </motion.p>

           <motion.img 
             variants={(fadeIn('up', 'tween' , 0.3, 1))}
             src="/arrow-down.svg"
             alt="arrow down"
             className='w-[18px] h-[28px] object-contain mt-[28px] '
            
           />
    </motion.div>
  </section>
);

export default About;
