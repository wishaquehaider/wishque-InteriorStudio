import React from 'react'
import style from '@/style/footer/footer.module.css';
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { FaLinkedinIn } from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri';

function Footer() {
    return (
        <div className={style.footer }>

            <div className={style.footerInfo} >
                <div className={style.contactField}>
                    <p className={style.footerHeading}>Contact Us</p>
                    <p> Send us an Email </p>
                    <a href='mailto:appear.interior@gmail.com'>
                        <p className={style.mail}>appear.interior@gmail.com</p>
                    </a>
                </div>

                <div className={style.adressField}>
                    <p className={style.footerHeading}>Adress</p>
                    <p>Sitara Institute, Kohinoor Rd, Near Mediacom Plaza, Kohinoor City Madina Town</p>
                </div>
            </div>


            <div className={style.iconsMain1}>
            <div className={style.FollowContainer}>
                <p className={`${style.Follow} title`}>Follow us</p>
              </div>
                <ul className={style.IconsContainer}>

                  <li>
                    <a
                     href='https://wa.me/923227173333'
                     target='_blank'
                    >
                      <PiWhatsappLogoThin className={style.icon}  />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/techloset"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className={style.icon} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCPC0RXZrvh50scjAzJC-IWg/channels"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiYoutubeLine className={style.icon} />
                    </a>
                  </li>
                </ul>
              </div>
        </div>
    )
}

export default Footer;