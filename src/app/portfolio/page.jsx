"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./portfolio.module.css"
import { useRef } from "react";
import Link from "next/link";


export default function Portfolio() { 
    const ref = useRef()
    const {scrollYProgress}= useScroll({traget:ref});
    const x = useTransform(scrollYProgress,[0,1],['30%','-100%']) ; 
   


    return ( <motion.div 
     className={styles.container}  
     initial={{y:'-200vh'}} animate={{y:0}} 
     transition={{duration:1.3}}>
        <div className=" h-[300vh] md:h-[500vh] lg:h-[600vh] relative flex flex-col" >
            <div className="h-[90vh] lg:h-[calc(100vh-6rem)] w-full lg:w-[80vw] flex justify-center items-center">
                <h1 className=" text-4xl lg:text-8xl font-semibold ">My Works</h1>
            </div>
            <div className="h-[250vh] md:h-[350vh] lg:h-[500vh] lg:w-[80vw] w-full" ref={ref}>
            <div className="sticky top-0 flex h-screen  lg:gap-4 gap-10 items-center overflow-hidden">
            <motion.div style={{x}} className="flex ">
            <div className=" h-[50vh] md:h-[70vh] lg:h-screen w-screen   flex flex-col justify-center items-center gap-4 lg:gap-8 lg:mt-10 mt-5"> 
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-white  mb-5 lg:mb-10">Header</h1>
                <img src="/pexel.jpg" alt="" className="lg:size-2/5 size-9/12 md:size-7/12 object-cover" />
                <p className="md:w-2/3 lg:w-1/3 w-full md:text-xl md:px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas exercitationem cumque omnis ducimus, nihil nam eum distinctio dolore recusandae minima, debitis repellendus voluptatum vitae assumenda nisi cupiditate alias sit amet impedit. Quisquam, animi! Soluta vel deserunt dolorem repudiandae est.</p>
                
                <button className="bg-white p-3 lg:p-6 rounded-md ml-60 md:ml-80 lg:ml-96"> See Demo</button>
            </div>
            <div className=" h-[50vh] md:h-[70vh] lg:h-screen w-screen   flex flex-col justify-center items-center gap-4 lg:gap-8 lg:mt-10 mt-5"> 
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-white  mb-5 lg:mb-10">Header</h1>
                <img src="/pexel.jpg" alt="" className="lg:size-2/5 size-9/12 md:size-7/12 object-cover" />
                <p className="md:w-2/3 lg:w-1/3 w-full md:text-xl md:px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas exercitationem cumque omnis ducimus, nihil nam eum distinctio dolore recusandae minima, debitis repellendus voluptatum vitae assumenda nisi cupiditate alias sit amet impedit. Quisquam, animi! Soluta vel deserunt dolorem repudiandae est.</p>
                
                <button className="bg-white p-3 lg:p-6 rounded-md ml-60 md:ml-80 lg:ml-96"> See Demo</button>
            </div>
            <div className=" h-[50vh] md:h-[70vh] lg:h-screen w-screen   flex flex-col justify-center items-center gap-4 lg:gap-8 lg:mt-10 mt-5"> 
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-white  mb-5 lg:mb-10">Header</h1>
                <img src="/pexel.jpg" alt="" className="lg:size-2/5 size-9/12 md:size-7/12 object-cover" />
                <p className="md:w-2/3 lg:w-1/3 w-full md:text-xl md:px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas exercitationem cumque omnis ducimus, nihil nam eum distinctio dolore recusandae minima, debitis repellendus voluptatum vitae assumenda nisi cupiditate alias sit amet impedit. Quisquam, animi! Soluta vel deserunt dolorem repudiandae est.</p>
                
                <button className="bg-white p-3 lg:p-6 rounded-md ml-60 md:ml-80 lg:ml-96"> See Demo</button>
            </div>
            
            

           
            <div className=" h-[0vh] lg:h-screen w-screen   flex flex-col justify-center items-center gap-4 lg:gap-8 lg:mt-10 mt-5">

            </div>
            
           </motion.div>
          
          
        </div>

            </div>

        
         <div className="  h-1/3 md:h-screen lg:h-screen lg:w-[80vw]  w-full flex flex-col  items-center justify-center relative">
            <h1 className=" text-3xl md:text-6xl  ">Do you have a project?</h1>

            <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className=" size-9/12 lg:size-1/2 md:w-[500px] md:h-[500px] lg:mt-20 "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <div className="size-28 top-[280px] md:size-36 md:top-[420px] rounded-full bg-black absolute lg:top-1/2">
          <Link href="/contact" className="text-white text-lg md:text-xl absolute top-10 lg:top-16 lg:left-10 md:top-14 md:left-10 left-6"> <motion.h1 
          
          transition={{repeat:Infinity ,duration:8, ease:'linear'}}
          >Hire Me</motion.h1></Link>
          </div>
         </div>
        </div>
        
        </motion.div>);
} 