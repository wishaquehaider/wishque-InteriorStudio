'use client'
import style from '@/style/projects/projects.module.css'
import Image from 'next/image';
const axios = require('axios');
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/(components)/navbar/navbar';
// import { Link } from 'react-scroll';

const ProjectData = ({ response }) => {

  let routers = useRouter();

  let [imageStyle, setImageStyle] = useState(false);


  let content = response.items.flatMap((item) => {
    return item.fields
  });


  let ans = response.items.flatMap((item) => {
    return item.fields.images[0]
  });


  let anss = ans.map((item) => {
    return item.fields
  });

  let imagesAllUrl = ans.map((item) => {
    return item.fields.file.url
  });
  
  let contentNew = response.items.flatMap((item) => {
    return item.fields.title
  });

  let newArray = ans.map((item, index) => {
    return {
      images: item.fields.file.url,
      content: contentNew[index]
    };
  })
 
  console.log(newArray);
  

  const handleMouseEnter = (index) => {
    const targetElement = document.getElementById(`${index}`);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Adjust the offset as needed
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseLeave = (index) => {
    const targetElementSecond = document.getElementById(`${index}`);
    if (targetElementSecond) {
      // targetElementSecond.previousElementSibling.style.opacity = 100
      // targetElementSecond.nextElementSibling.style.opacity = 100
    }
    // const offsetTop = targetElement.offsetTop - 100; // Adjust the offset as needed
    setImageStyle(false);
  };


  return (
    <>
    <div className={style.mainParent}>
         <Navbar/>
      <div className={style.main}>

        <h1 className={style.mainHeading}>Project</h1>
        <div className={style.contentParent}>
          <div className={style.contentChild}>
            <p className={style.heading}>Date</p>
            <p className={style.heading}>Name</p>
          </div>
          <div className={style.paragraph}>
            <p className={style.heading}>Type</p>
          </div>
        </div>



        {
          content.map((item, i) => {
            let route = item.title.replaceAll(' ', '-').toLowerCase();
            return <>
              <Link href={`projects/${route}`}>
                <div
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}

                  className={style.contentParentApiData}
                >
                  <div className={style.contentChild}>
                    <p className={style.heading}>{item.year}</p>
                    <p className={style.headingMain} >{item.title}</p>
                  </div>
                  <div className={style.paragraph}>
                    <p className={style.heading}>{item.type}</p>

                  </div>
                </div>
              </Link>
            </>
          })
        }
      </div>


      <div className={style.imagesSection}>

        {
          anss.map((item, i) => {
            let route = item.title.replaceAll(' ', '-').toLowerCase();
            return <>
              <Link href={`projects/${route}`}>

              <div id={`${i}`} className={imageStyle ? style.imageParentScroll : style.imgParent}>
                <Image alt={item.file.url} className={style.myImg} src={'https:' + item.file.url} fill={true} />
              </div>

              </Link>
            </>
          })

        }

      </div>

    </div>

    <div className={style.mobileProjectMain}>
      <Navbar/>
      <div className={style.parentMobile}>
        <h1 className={style.headingContent}>Projecs</h1>
        {
          newArray.map(item => {
            let route = item.content.replaceAll(' ', '-').toLowerCase();

            return (
              <>
              <Link href={`projects/${route}`}>
            <div className={style.mobileImgParent}>
              <Image alt={item.images} src={'https:'+ item.images} fill={true} />
            </div>
              <p>{item.content}</p>
              </Link>  
              </>
            )
          })
        }

     

      </div>

    </div>

    </>
  )
}

export default ProjectData;