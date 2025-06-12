import { getTechLogos } from '@/lib/utils'
import React from 'react'

const DisplayTechIcons = async({techStack}: TechIconProps) => {
    const techIcons = await getTechLogos(techStack)
  return (
    <div className='flex flex-row'>
      {techIcons}
    </div>
  )
}

export default DisplayTechIcons
