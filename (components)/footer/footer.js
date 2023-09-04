import React from 'react'
import style from '@/style/footer/footer.module.css';
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa'
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

            <div className={style.footerIconsParent}>
                <p className={style.footerHeading}>Follow us</p>
                <div className={style.iconsParent}>
                    <div className={style.whatsAppParent}>
                        <Link target='_blank' href={'https://wa.me/923227173333'}> <PiWhatsappLogoThin className={style.whatsApp} color='white' fontSize={35} /> </Link>
                    </div>
                    <div className={style.youtubeParent}>
                        <Link target='_blank' href={'https://www.youtube.com/@appearstudio'}>  <AiOutlineYoutube className={style.youtube} color='white' fontSize={35} /> </Link>
                    </div>
                    <div className={style.youtubeParent}>
                        <Link target='_blank' href={'https://www.linkedin.com/in/zahir-saleem-aab545281/'} > <FaLinkedinIn color='white' className={style.linkedIn} fontSize={35} /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;