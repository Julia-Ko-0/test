import styles from './novbar.module.css'
let img_p = 'https://i.pinimg.com/564x/36/e8/98/36e898e3c962164b04091ff4e752db6f.jpg'
export const NovBar = ()=>{
    return( <div className={styles.div_novbar}>
      <img src={img_p}></img>

    </div>)
   
}