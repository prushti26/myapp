import React from 'react'

export default function ImageData ({url}) {
    console.log(url);
  return (
    <>
        <img src={url}/>
    </>
  )
}
