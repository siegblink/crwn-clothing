import React, { useState } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { HOMEPAGE_DATA } from './homepageData'

export default function Directory() {
  const [sections] = useState(HOMEPAGE_DATA)

  return (
    <div className='directory-menu'>
      {!sections.length ? (
        <div>Loading...</div>
      ) : (
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      )}
    </div>
  )
}
