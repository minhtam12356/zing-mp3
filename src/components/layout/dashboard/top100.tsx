import React from 'react'
import songs from '@/data/songs.json';
import { AlbumSongs } from './album-songs';
import { AlbumTitle } from './album-title';

export const Top100 = () => {
  return (
    <div className="hot-trending mt-6">
      <AlbumTitle title='Top 100' additionButton='Tất cả  >' />
      <AlbumSongs songs={songs.data.items?.slice(15, 20)} /> 
    </div>
  )
}
