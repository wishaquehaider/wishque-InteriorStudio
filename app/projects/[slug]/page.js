import { client } from '@/lib/contentful';
import React from 'react';
import style from '@/style/projects/projects.module.css';
import Image from 'next/image';

const Page = async ({ params }) => {


  let rest = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  // console.log('rest',rest);

  let uni = params.slug.split('-');
  let maping = uni.map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
  let final = maping.join(' ');

  const response = await client.getEntries({
    content_type: 'project',
    'fields.title': final
  });

  let imagesArr = response.items.flatMap(item => {
       return item.fields.images
  })
  
  let imagesUrl = imagesArr.flatMap(item => {
    return item.fields.file.url
  })

  let imagesUrlnn = imagesArr.flatMap(item => {
    // if(item.fields.title != 'double'){
      return item.fields

    // }
  })

 
  let neus = imagesUrlnn.filter(item => {
    console.log(item.file.url);
     if(item.title !== 'double') {
      return item.title
     }
  })

  console.log('neus',neus);


  return (
    <div className={style.mainParentSlug}>
      {
        response.items.map(item => {
          // console.log('item', item);
          return <div>

            <div className={style.contentSection}>
              <h1 className={style.mainHeadingNested}>{item.fields.title}</h1>
              <div className={style.mainContentNested}>
                <div className={style.headingParent}>
                  <div>
                    <h2 className={style.nestedSmallHeading}>Type</h2>
                    <p className={style.nestedSmallText}>{item.fields.type}</p>
                  </div>
                  <div>
                    <h2 className={style.nestedSmallHeading}>Location</h2>
                    <p className={style.nestedSmallText}>{item.fields.location}</p>
                  </div>
                  <div>
                    <h2 className={style.nestedSmallHeading}>Year</h2>
                    <p className={style.nestedSmallText}>{item.fields.year}</p>
                  </div>
                </div>

                <div>
                  <p className={style.paragraphNested}>{item.fields.description}</p>
                </div>

            

              </div>
            </div>
   
            <div className={style.parentImagesSlug}>
                {
                  imagesUrl.map((item,index) => {

                    return <>
                    {
                      (index)%3 !==0 ? <div className={style.imageParentSlug}>

                      <Image alt={item} key={index} src={'https:'+item} fill={true} /> 

                       </div> : <div className={style.imageParentSecondSlug}>
                       <Image alt={item} key={index} src={'https:'+item} fill={true} />
                       </div>

                    }
                    </> 
                  })
                }
                </div>      

          </div>
        })
      }
      <div className={style.hrTag}></div>

    </div>
  )
}

export default Page;