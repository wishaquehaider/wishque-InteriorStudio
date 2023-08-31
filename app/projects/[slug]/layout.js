import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import style from '@/style/projects/projects.module.css'

const layout = ({children}) => {
  return (
   <div>
    <div className={style.navIconCross}>
    <RxCross1 fontSize={25} />
    </div>
    {children}
    <div className={style.footer}>
                <div className={style.footerInfo} >
                   <div>
                      <p>  +1 (416) 761-9736</p>
                       <p> Follow Us </p>
                       <p> Send us an Email </p>
                    </div>  
                    
                    <div>
                        <p>91 Pelham Avenue</p>
                        <p>Toronto, Canada</p>
                        <p> M6N 1A5</p>
                    </div>                
                </div>

                <div>
                    <p className={style.paragraphFooter}>
                        工作室
                        微信
                        电子邮件
                    </p>
                </div>
            </div>
   </div>
  )
}

export default layout