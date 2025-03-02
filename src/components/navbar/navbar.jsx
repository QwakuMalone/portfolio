"use client"
import Link from "next/link";
import styles from "./navbar.module.css"
import { useState } from "react";
import Navlinks from "./navlink/navlink";
import { easeOut, motion } from "framer-motion";

export default function Navbar() {

 const [open,setOpen]=useState(false)
 const menuopen=()=>{
    setOpen(!open)
 }
 const topVariants = {
    closed:{ rotate:0},
    open:{
        rotate:45, backgroundColor:'rgb(255,255,255)'
    }
 }
 const centerVariants = {
    closed:{ opacity:1},
    open:{
        opacity:0
    }
 }
 const buttomVariants = {
    closed:{ rotate:0},
    open:{
        rotate:-45, backgroundColor:'rgb(255,255,255)'
    }
 }

 const menuVariant= {
    init:{x:'100vw'},
    anime:{x:0,
        transition:{
           
            type:'spring',
            stiffness:100,
            when:'beforeChildren',
            staggerChildren:0.2,
            
            
        },
        
    }
 }
 const menulistVariants = {
    init:{ x:-10, opacity:0},
    anime:{ x:0, opacity:1,
    },
    
 }
 const links=[
    {title:'Home', path:'/'},
    {title:'About', path:'/about'}, 
    {title:'Portfolio', path:'/portfolio'},
    {title:'Contact', path:'/contact'},
   

]
 
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    links.map(link=>(
                        <Navlinks link={link} key={link.title} />
                    ))
                }
            </div>
            
            {/* LOGO */}
            <div className={styles.logo}>
                <Link href='/'>
                <div className=" bg-black py-2 px-1 text-white font-semibold rounded-xl 
            md:hidden lg:flex  items-center ">
                <span>Atobra</span>
                <span className="bg-white text-black p-1 rounded-md">.dev</span>
                </div></Link> </div>

                {/* Icons */}
                <div className={styles.icons}>
                <img src="/github.png" alt=""  />
                <img src="/instagram.png" alt=""  />
                <img src="/linkedin.png" alt=""  />
                <img src="/facebook.png" alt=""  />
                <img src="/dribble.png" alt=""  />
            </div>

                {/* Responsive menu */}
            <div className={styles.btn} onClick={menuopen} >  
                {/* menubutton */}
                <motion.button variants={topVariants}  animate={open? 'open' : 'cosed'} className="w-10 h-1 bg-black rounded origin-left z-50 "></motion.button>
                <motion.button variants={centerVariants}  animate={open? 'open' : 'cosed'} className="w-10 h-1 bg-black rounded z-50"></motion.button>
                <motion.button variants={buttomVariants}  animate={open? 'open' : 'cosed'} className="w-10 h-1 bg-black rounded origin-left z-50"></motion.button>
                
            </div>
            {/* Links */}
                    { open && ( <motion.div variants={menuVariant} initial='init' animate='anime' className={styles.menulist}>
                        { 
                         links.map((link)=>(
                            <motion.div variants={menulistVariants}  key={link.title} className="z-40">
                            <Navlinks  link={link}/>
                            </motion.div>
                        ))
                    }</motion.div>)
                    }
                
        </div>
    );
}