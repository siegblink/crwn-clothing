import React, { useState } from 'react'
import { SHOP_DATA } from './shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

export default function ShopPage() {
  const [collections] = useState(SHOP_DATA)

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}
