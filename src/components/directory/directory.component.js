import React, { useState } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { data } from './data'

export default function Directory() {
  const [sections, setSections] = useState(data)

  return (
    <div className='directory-menu'>
      {!sections.length ? (
        <div>Loading...</div>
      ) : (
        sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      )}
    </div>
  )
}
