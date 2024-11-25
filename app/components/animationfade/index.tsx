"use client"
import { motion } from 'framer-motion'


export default function FadeIn({children, delay} : {children: React.ReactNode, delay?: number}){
    const revealVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay ? delay : 0.3,
                type: 'spring',
                stiffness: 100,
            }
        }
    }
    return (
        <motion.div
            className=""
            variants={revealVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.div>
    )
}