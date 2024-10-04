import React from 'react'
import { Image } from '../image';

export const Arrow = (props: { type: 'right' | 'left' }) => {
  const { type } = props;

  return (
    <button className="button mr-4">
      <Image 
        src='/arrow.png'
        alt='arrow'
        width={20}
        height={20}
        className={`arrow ${type === 'left' ? 'reverse deactivate' : ''}`}
      />
    </button>
  )
}
