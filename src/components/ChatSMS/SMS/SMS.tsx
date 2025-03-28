
type SMSProps = {
    smsType?: number,
    sms?:string,
}




export const SMS : React.FC<SMSProps> = ({smsType, sms})=>{

//   if(smsType ==1){
//     return(
//         <div>
//             SMSFor()
//         </div>
//     )
//   }
//   if(smsType == 2){
//     return(
//         <div>
//             SMSme()
//         </div>
//     )
//   }
  return(
  <div>
    {smsType == 1 && <SMSMe sms={sms} />}
    {smsType == 2 && <SMSFor sms={sms} />}
  </div>
)
}


export const SMSMe : React.FC<SMSProps> = ({sms})=>{
    return(
        <div style={{backgroundColor:"green"}}>
            <p>{sms}</p>
        </div>
    )
}

export const SMSFor : React.FC<SMSProps> = ({sms})=>{
    return(
        <div style={{backgroundColor:"blue"}}>
            <p>{sms}</p>
        </div>
    )
}
