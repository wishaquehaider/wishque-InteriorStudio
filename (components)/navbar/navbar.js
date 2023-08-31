'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import style from '../../style/navbar/navbar.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import '../../app/globals.css'
import Link from 'next/link';

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

            <div className={style.navContentFlex}>

                <div className={navStyle ? style.parentContent : style.parentContentNone}>
                    <Link href={'/'}> <h2 onClick={function () {
                        setNavStyle(false)
                    }} className={style.navItemMain}>mason studio</h2> </Link>
                    <div className={style.hrTag}></div>
                    <Link href={'/projects'}> <h2 onClick={onClickLinks} className={style.navItem}>Projects</h2> </Link>
                    <div className={style.hrTag}></div>
                    <Link href={'/about'} >  <h2 onClick={onClickLinks} className={style.navItem}>About</h2> </Link>
                    <div className={style.hrTag}></div>
                    <h2 className={style.navItem}>Cultural Hub</h2>
                    <div className={style.hrTag}></div>
                    <h2 className={style.navItem}>Journal</h2>
                    <div className={style.hrTag}></div>

                </div>

                <div className={navStyle ? style.footer : style.footerNone}>
                       
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



        </div>
    )
}

export default Navbar;