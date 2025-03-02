"use client"
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../navbar/navbar";
import { usePathname } from "next/navigation";

export default function TransitionPage({children}) {

    const pathName= usePathname()
    return ( 
        <AnimatePresence mode="wait">
        
        <div  key={pathName} className="">
    <motion.div  className="h-screen w-screen rounded-b-[100px] fixed z-30 bg-black" 
           animate={{height:'0vh'}}
           exit={{height:'140vh'}}
           transition={{duration:0.5, ease:'easeOut'}}
        />
    <motion.div className="text-white z-40 fixed m-auto left-0 right-0 top-0 w-fit h-fit bottom-0 text-7xl" 
           initial={{opacity:1}}
           animate={{opacity:0}}
           exit={{opacity:0}}
           transition={{duration:1, ease:'easeOut'}}> {pathName.substring(1)} </motion.div>
    <motion.div  className="h-screen w-screen rounded-t-[100px] bottom-0 fixed z-30 bg-black" 
           initial={{height:'140vh'}}
           animate={{height:'0vh', transition:{delay:1}}}
           
        />
    
   
             <div className="h-24 ">
                <Navbar/>
                </div>
                <div className="h-[calc(100vh-96px)]">
                {children}
                </div>
        </div>
        </AnimatePresence>
        
    );
    
}

   
