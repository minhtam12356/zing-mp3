import React from 'react'
import songs from '@/data/songs.json';
import { AlbumTitle } from './album-title'
import { AlbumSongs } from './album-songs'

export const Chill = () => {
  return (
    <div className="hot-trending mt-6">
      <AlbumTitle title='Chill' additionButton='Tất cả  >' />
      <AlbumSongs songs={songs.data.items?.slice(5, 10)} /> 
    </div>
  )
}
