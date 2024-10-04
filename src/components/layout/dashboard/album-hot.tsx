import React from 'react'
import songs from '@/data/songs.json';
import { AlbumSongs } from './album-songs';
import { AlbumTitle } from './album-title';

export const AlbumHot = () => {
  return (
    <div className="hot-trending mt-6">
      <AlbumTitle title='Album Hot' additionButton='Tất cả  >' />
      <AlbumSongs songs={songs.data.items?.slice(20, 25)} /> 
    </div>
  )
}
