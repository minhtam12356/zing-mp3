import React from 'react'
import songs from '@/data/songs.json';
import { AlbumTitle } from './album-title';
import { AlbumSongs } from './album-songs';

export const HotTrending = () => {
  return (
    <div className="hot-trending mt-6">
      <AlbumTitle title='Nhạc hot thịnh hành' additionButton='Tất cả  >' />
      <AlbumSongs songs={songs.data.items?.slice(0, 5)} /> 
    </div>
  )
}
