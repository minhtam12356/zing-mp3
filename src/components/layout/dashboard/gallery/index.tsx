import React from 'react'
import { Image } from '@/components';

export const Gallery = (props: { songs: any }) => {
  const { songs = [] } = props;

  return (
    <div className='gallery flex'>
      {
        songs.slice(0, 3).map((song: any, index: number) => (
          <div 
            className="item relative overflow-hidden"
            key={index}
            style={{ width: 350, height: 200, paddingLeft: 15, paddingRight: 15 }}
          >
            <Image
              src={song.banner}
              alt=''
              fill
              className='hover:scale-110 duration-700 cursor-pointer'
            />
          </div>
        ))
      }
    </div>
  )
}
