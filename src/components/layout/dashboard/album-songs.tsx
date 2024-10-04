import React from 'react'
import { Card } from './card';

export const AlbumSongs = (props: { songs: any }) => {
  const { songs = [] } = props

  return (
    <div className="album-songs">
      {
        songs.map((song: any, index: number) => {
          return <Card
            key={index}
            title={song.title}
            content={song.artistsNames}
            image={{
              src: song.thumbnailM,
              alt: 'song',
            }}
          />
        })
      }
    </div>
  )
}
