import React from 'react';
import ImageData from './ImageData';

export default function Album({items}) {
    // console.log(items.thumbnailUrl)
  return (
    <div>
        <p>{items.title}</p>
        <ImageData url={items.thumbnailUrl}/>
    </div>
  )
}
