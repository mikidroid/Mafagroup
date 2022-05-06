import { motion ,AnimatePresence} from "framer-motion";
import React from "react";


export function TY1(props){
  return(
     <motion.div
        key="modal"
        initial={{ opacity: 0,translateY: '100px' }}
        whileInView={{ opacity: 1, translateY:0 }}
        transition={{ type: 'linear',duration: 2.0 }}
        >
        
         
         {props.children}
          
         </motion.div>
   )
 }
 
export function TY2(props){
  return(
     <motion.div
        key="modal"
        initial={{ opacity: 0,translateY: '-50px' }}
        whileInView={{ opacity: 1, translateY:0 }}
        transition={{ type: 'linear',duration: 3.0 }}
        >
        
        {props.children}
          
         </motion.div>
   )
 }
 
 
 export function TX1(props){
  return(
     <motion.div
        key="modal"
        initial={{ opacity: 0,translateX: '40px' }}
        whileInView={{ opacity: 1, translateX:0 }}
        transition={{ type: 'linear',duration: 4.0 }}
        >
        
         
         {props.children}
          
         </motion.div>
   )
 }
  
export function TX2(props){
  return(
     <motion.div
        key="modal"
        initial={{ opacity: 0,translateX: '-100px' }}
        whileInView={{ opacity: 1, translateX:0 }}
        transition={{ type: 'linear',duration: 4.0 }}
        >
        
         
         {props.children}
          
         </motion.div>
   )
 }
  
  
export function S1(props) {
 
 return(
 <motion.div
        key="modal"
        initial={{ opacity: 0, scale:2 }}
        whileInView={{ opacity: 1,scale:1 }}
        transition={{ type: 'linear',duration: 4.9 }}
      >
       
       {props.children}
          
       </motion.div>
          
  )
          
}

export function S2(props) {
 
 return(
 <motion.div
        key="modal"
        initial={{ opacity: 0, scale:-2 }}
        whileInView={{ opacity: 1,scale:1 }}
        transition={{ type: 'linear',duration: 4.9 }}
      >
       
       {props.children}
          
       </motion.div>
          
  )
          
}

export function R1(props){
  return(
     <motion.div
        key="modal"
        initial={{ opacity:0,rotateY:0 }}
        whileInView={{opacity:1, rotateY:360 }}
        transition={{ duration:2.0 }}
        transition={{ type: 'linear',duration: 1.9 }}
        >
        
         {props.children}
          
         </motion.div>
   )
 }
 
export function R2(props){
  return(
     <motion.div
        key="modal"
        initial={{ opacity:0,rotateX:0 }}
        whileInView={{opacity:1, rotateX:360 }}
        transition={{ duration:2.0 }}
        transition={{ type: 'linear',duration: 1.9 }}
        >
        
         
         {props.children}
          
         </motion.div>
   )
 }
 
export function STX1(props){
  return(
     <motion.span
        key="modal"
        initial={{ opacity:0,translateX:100 }}
        whileInView={{opacity:1, translateX:0 }}
        transition={{ duration:0.5 }}
        
        >
        
         
         {props.children}
          
         </motion.span>
   )
 }
 
export function STX2(props){
  return(
     <motion.span
        key="modal"
        initial={{ opacity:0,translateX:200 }}
        whileInView={{opacity:1, translateX:0 }}
        transition={{ duration:1.5 }}
        
        >
        
         
         {props.children}
          
         </motion.span>
   )
 }
 
export function STX3(props){
  return(
     <motion.span
        key="modal"
        initial={{ opacity:0,translateX:300 }}
        whileInView={{opacity:1, translateX:0 }}
        transition={{ duration:2.5 }}
        
        >
        
         
         {props.children}
          
         </motion.span>
   )
 }
 
 export function STX4(props){
  return(
     <motion.span
        key="modal"
        initial={{ opacity:0,translateX:400 }}
        whileInView={{opacity:1, translateX:0 }}
        transition={{ duration:3.5 }}
        
        >
        
         
         {props.children}
          
         </motion.span>
   )
 }
 
 export function STX5(props){
  return(
     <motion.span
        key="modal"
        initial={{ opacity:0,translateX:400 }}
        whileInView={{opacity:1, translateX:0 }}
        transition={{ duration:4.5 }}
        
        >
        
         
         {props.children}
          
         </motion.span>
   )
 }