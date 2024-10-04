import React from 'react'

export const AlbumTitle = (props: { title: string; additionButton?: string }) => {
  const { title, additionButton } = props;
  
  return (
    <div className='album-title flex justify-between items-center mb-5'>
      <div className="title text-xl font-bold">{title}</div>
      <div className="addition-button text-xs uppercase cursor-pointer">{additionButton}</div>
    </div>
  )
}
