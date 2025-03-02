"use client"

import { useRef } from "react";
import styles from "./about.module.css"
import { motion, spring, useInView, useScroll } from "framer-motion";
export default function About() {
    const containerRef = useRef()
    const {scrollYProgress} = useScroll(containerRef)
    const skillRef = useRef()
    const skillRefInView = useInView(skillRef,{ margin:'-100px'})
    
    const expRef = useRef()
    const expRefInView = useInView(expRef)


    

    return ( <motion.div initial={{y:'-200vh'}} animate={{y:0}} transition={{duration:1.3}}>
        <div className={styles.container} ref={containerRef}>
            <div className={styles.biography}>
                {/* Biography Section */}
                <h1 className="lg:text-3xl font-bold text-2xl">Biography</h1>

                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur, in quae sunt perferendis exercitationem consectetur ullam alias dolor! Ipsa beatae perspiciatis atque. Ducimus eum nesciunt nostrum! Tenetur et suscipit quas quasi exercitationem provident quam, tempora aut praesentium. Optio dolorum mollitia odit doloribus veniam animi ipsum soluta earum error reprehenderit?</p>
                <span className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, omnis.</span>

                <img src="/sign.svg" alt="" className="size-24 self-end"/>

                <motion.svg 
               animate={{y:[-20,0,-20], transition:{
                repeat:Infinity, duration:2
               }}}
                
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hidden lg:block">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</motion.svg>
                   <div ref={skillRef}>
                     {/* Skills Section */}
                <motion.h1 
                initial={{x:-200}}
                animate={skillRefInView? {x:0}:{}}
                transition={{ type:spring}}
                className="lg:text-3xl font-bold text-2xl mb-7">SKILLS</motion.h1>
                <div className="flex gap-4 flex-wrap">
                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500  ">JavaScript</span>
                    
                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">React</span>
                    
                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">JavaScript</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">HTML</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">CSS</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">Nextjs</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">Framer-Motion</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">Tailwind</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">Bootstrap</span>

                    <span className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition ease-in-out duration-500">Figma</span>                    
                </div>
                   </div>

                 {/* Experience Section */}
                 <div className="pb-32" ref={expRef}>
                    <motion.h1 
                    
                    initial={{x:-200}}
                    animate={expRefInView?{x:0}:{}}
                    transition={{delay:0.4, type:spring,}}
                    className="lg:text-3xl font-bold text-2xl pb-20" >EXPERIENCE</motion.h1>
                        {/* first row */}
                        <motion.div 
                       
                        initial={{x:-100}}
                        animate={expRefInView?{x:0}:{}}
                        transition={{type:'spring'}}
                        >
                        <div         
                    className="flex w-full h-72 gap-9">
                        {/* left */}
                        <div className="w-1/3  flex flex-col gap-6 pt-5" >
                        <h1 className="text-lg font-bold bg-white w-fit p-3 rounded-md"> Junior Web developer</h1>

                        <p className="px-3 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum?</p>

                        <p className="text-red-400 font-bold text-lg px-3">date </p>

                        <p className="bg-white size-fit px-3 rounded-full font-bold ">company</p>
                        </div>
                        {/* center */}
                        <div className="w-1/6 relative">
                        <div className="h-full w-1 bg-slate-500 "></div>
                        <div className="size-5 rounded-full ring-4 ring-red-400 absolute top-0 -left-2 bg-white"></div>
                        </div>
                        {/* right */}
                        <div className="w-1/3  flex flex-col gap-6 pt-5"></div>
                    </div>

                    {/* second row */}
                    <div className="flex w-full h-72 gap-9">
                        {/* left */}
                        <div className="w-1/3  flex flex-col gap-6 pt-5" >
                        
                        </div>
                        {/* center */}
                        <div className="w-1/6 relative">
                        <div className="h-full w-1 bg-slate-500 "></div>
                        <div className="size-5 rounded-full ring-4 ring-red-400 absolute top-0 -left-2 bg-white"></div>
                        </div>
                        {/* right */}
                        <div className="w-1/3  flex flex-col gap-6 pt-5">
                        <h1 className="text-lg font-bold bg-white w-fit p-3 rounded-md"> Junior Web developer</h1>

                        <p className="px-3 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum?</p>

                        <p className="text-red-400 font-bold text-lg px-3">date </p>

                        <p className="bg-white size-fit px-3 rounded-full font-bold ">company</p>
                        </div>
                    </div>

                    {/* third row */}
                    <div className="flex w-full h-72 gap-9">
                        {/* left */}
                        <div className="w-1/3  flex flex-col gap-6 pt-5" >
                        <h1 className="text-lg font-bold bg-white w-fit p-3 rounded-md"> Junior Web developer</h1>

                        <p className="px-3 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum?</p>

                        <p className="text-red-400 font-bold text-lg px-3">date </p>

                        <p className="bg-white size-fit px-3 rounded-full font-bold ">company</p>
                        </div>
                        {/* center */}
                        <div className="w-1/6 relative">
                        <div className="h-full w-1 bg-slate-500 "></div>
                        <div className="size-5 rounded-full ring-4 ring-red-400 absolute top-0 -left-2 bg-white"></div>
                        </div>
                        {/* right */}
                        <div className="w-1/3  flex flex-col gap-6 pt-5"></div>
                    </div>
                        </motion.div>
                
                
                  </div>

            </div>

          

            
        </div>
        </motion.div>
    );
}