"use client"
import { motion } from "framer-motion";
import styles from "./contact.module.css"

export default function Contact() {
    return ( <motion.div initial={{y:'-200vh'}} animate={{y:0}} transition={{duration:1.3}}>
        <div className={styles.container}>
            <div className="h-full w-1/2 flex justify-center items-center ">
             <h1 className="text-7xl"> Say Hello <span>&#128513;</span></h1>
            </div>
            <div className="h-full w-1/2  justify-center items-center">
            <div className="bg-white h-[85vh] rounded-lg mt-10 flex flex-col gap-24 p-28 ">
                <h1 className="text-xl font-semibold">Dear Atobra,</h1>
                <input type="text"  className="border-b-2 border-black mt-24"/>


                <input type="text"  className="border-b-2 border-black "/>
                <button className="bg-red-200 h-12 rounded-md text-lg font-semibold"> Send</button>

            </div>
            </div>
            
        </div>
        </motion.div>);
}