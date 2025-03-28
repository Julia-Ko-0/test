import React from 'react'
import styles from './chats.module.css'
import { SMS } from '../../models/models'
type SMSProps = {
    sms: SMS
}
 export const CrElChats:React.FC<SMSProps>=({sms})=>{
    return( 
    <li className={styles.div_chats}>
     <img src={sms.img}></img>
     <div  className={styles.div_chats_name_and_sms}>
        
         <div  className={styles.div_chats_sms}>
             <span >{sms.name}</span>
             <span  className={styles.chats_sms_date}>{sms.date}</span>
 
         </div>
     {sms.text.length>70 &&  <span>{sms.text.substring(0,70)}...</span> }
     {sms.text.length<=70 &&  <span>{sms.text}</span> }
      
          </div>
 </li>)
 }