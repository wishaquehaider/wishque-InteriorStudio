import React from 'react'
import ProjectData from './projectData/projectData';
import { client } from '@/lib/contentful';

const page = async() => {
  const response = (await client.getEntries({ content_type: "project" }));
  JSON.stringify(response)
  return (

    <div>
        <ProjectData response={response} />
    </div>
  )
}

export default page;