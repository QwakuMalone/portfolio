"use client"
import { useRouter } from "next/navigation";
import styles from "./home.module.css"
import { motion } from "framer-motion";
export default function Home() {
    const router = useRouter()
     const btnContact =  ()=>{
        router.push("/contact")
     }
     const btnPortfoliio = ()=>{
        router.push("/portfolio")
     }
    return ( <motion.div initial={{y:'-200vh'}} animate={{y:0}} transition={{duration:1.4}} className="h-full">
        <div className={styles.container}>
        {/* img container */}
        <div className="h-1/2 flex justify-center lg:w-1/2 lg:h-full">
            <img src="/dwn.gif" alt="" className="object-contain " />
        </div>

        {/* text container */}
        <div className="h-1/2 flex flex-col gap-8 justify-center items-center lg:w-1/2 lg:h-full lg:px-9">
            <h1 className="text-4xl font-bold lg:text-6xl xl:pr-40"> Atobra .dev Creative site</h1>
            <p className="lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium dolorem natus magni reprehenderit fugiat veritatis! Harum itaque dolorem excepturi ducimus nobis similique qui quos atque amet voluptatum aliquam minima eligendi voluptatibus, deleniti hic consequuntur corporis doloribus cumque sint, molestiae sapiente, magnam in commodi. Ex sunt natus facilis explicabo vel?</p>
            <div className="flex gap-6 text-lg">
                <button   onClick={btnPortfoliio} className="p-4 rounded-lg bg-black text-white"  > View my work</button>
                <button onClick={btnContact} className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </div>
        </div>

        </div>
        </motion.div>
    );
}