"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import style from '../../style/home/homeScreen.module.css';
import '../../app/globals.css'
import Link from 'next/link';

function MainScreen() {

  const [text, setText] = useState('Design is our tool to create inspiring experiences that empower people and communities.');
  const [hover, setHover] = useState(false);

  const [secondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);
  const [forthHover, setForthHover] = useState(false);
  const [fifthHover, setFifthHover] = useState(false);
  const [sixthHover, setSixthHover] = useState(false);

  const mouseEnterMainFisrt  = () => {
    setText('2023: An Optimistic Future A Place to experience everyday life in an optimistic future')
    setHover(true)
  };

  const mouseOutMainFisrt  = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setHover(false)
  };

  const mouseEnterMainSec = () => {
    setText('Mobile Mercantile Reimagining the business of retail');
    setSecondHover(true);
  };

  const mouseLeaveMainSec = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setSecondHover(false)
  };

  const mouseEnterThird = () => {
    setText('Full Moon Reflected on the Ocean experiences that empower people and communites');
    setThirdHover(true)
  };

  const mouseLeaveThird = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.');
    setThirdHover(false)
  };

  const mouseEnterFouth = () => {
    setText('The Studio A collective mind of diverse individuals');
    setForthHover(true)
  }

  const mouseLeaveFouth = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.');
    setForthHover(false)
  };

  const mouseEnterfifth = () => {
    setText('Daniles Regent Park Community driven design.')
    setFifthHover(true)
  }

  const mouseLeavefifth = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setFifthHover(false)
  };

  const mouseEnterSixth = () => {
       setText('Refuge in the sky Balancing famaliarity with novelty');
       setSixthHover(true)
  }

  const mouseLeaveSixth = () => {
    setText('Design is our tool to create inspiring experiences that empower people and communities.')
    setSixthHover(false);
  }


 

  return (
    <div className={style.mainParent}>
      <div className={style.homeContentParent}>
        <h2 className={style.headingContent}>mason studio</h2>
        <div>
        <p className={style.contentParagraph}>{text}</p>
        </div>
        <p className={style.lastContent}>©2023 Mason Studio Inc</p>
      </div>

      <div className={style.imagesSection}> 

        <div className={style.imageFirstPortion}>
       <div onMouseEnter={mouseEnterMainFisrt} onMouseLeave={mouseOutMainFisrt} className={ hover ? style.mainImageOneHover : style.mainImageOne} >
            <Image className={style.myImage} src={'/homeScreen/homeFirst.jpg'}             
              fill={true}
            />
          </div>

          <div className={style.bothImages}>
            <div onMouseEnter={mouseEnterMainSec} onMouseLeave={mouseLeaveMainSec} className={ secondHover ?  style.mainImageTwoHover : style.mainImageTwo}>
              <Image className={style.myImage} src={'/homeScreen/homeSecond.jpg'}
                fill={true}
              />
            </div>

            <div onMouseEnter={mouseEnterThird} onMouseLeave={mouseLeaveThird} className={thirdHover ? style.homeImageThreeHover : style.homeImageThree} >
              <Image className={style.myImage} src={'/homeScreen/homeThird.jpg'}
                fill={true}
              />
            </div>
          </div>
        </div>

        <div className={style.imageSecondPortion}>
          <div className={style.bothImages}>
            <div onMouseEnter={mouseEnterFouth} onMouseLeave={mouseLeaveFouth} className={ forthHover ? style.mainImageFourthHover : style.mainImageFourth}>
              <Image className={style.myImage} src={'/homeScreen/homeFourth.jpg'}
                fill={true}
              />
            </div>

            <div onMouseEnter={mouseEnterfifth} onMouseLeave={mouseLeavefifth} className={ fifthHover ? style.homeImageFifthHover : style.homeImageFifth}>
              <Image className={style.myImage} src={'/homeScreen/homeFifth.jpg'}
                fill={true}
              />
            </div>
          </div>

          <div onMouseEnter={mouseEnterSixth} onMouseLeave={mouseLeaveSixth} className={ sixthHover ? style.mainImageSixthHover : style.mainImageSixth} >
            <Image className={style.myImage} src={'/homeScreen/homeSixth.jpg'}
              fill={true}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainScreen;