'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import style from '../../style/navbar/navbar.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import '../../app/globals.css'
import Link from 'next/link';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'

function Navbar() {
    const [navStyle, setNavStyle] = useState(false);

    const onClickLinks = () => {
        setNavStyle(false)
    }

    return (
        <div className={navStyle ? style.main : style.mainNone}>
            <AiOutlineMenu onClick={function () {
                setNavStyle(true)
            }} className={navStyle ? style.navImageNone : style.navImage} fontSize={25} />
            <RxCross1 onClick={function () {
                setNavStyle(false)
            }} className={navStyle ? style.navImageCross : style.navImageCrossNone} fontSize={25} />

            <div className={navStyle ? style.logoNone : style.logo}>
                <Image src={'/studioLogo.png'} fill={true} />
            </div>
            <div className={style.navContentFlex}>

                <div className={navStyle ? style.parentContent : style.parentContentNone}>
                    <Link href={'/'}> <h2 onClick={function () {
                        setNavStyle(false)
                    }} className={style.navItemMain}>Appears Interior studio</h2> </Link>
                    <div className={style.hrTag}></div>
                    <Link href={'/projects'}> <h2 onClick={onClickLinks} className={style.navItem}>Projects</h2> </Link>
                    <div className={style.hrTag}></div>
                    <Link href={'/about'} >  <h2 onClick={onClickLinks} className={style.navItem}>About</h2> </Link>
                    <div className={style.hrTag}></div>


                </div>

                <div className={navStyle ? style.footer : style.footerNone}>

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

            </div>



        </div>
    )
}

export default Navbar;