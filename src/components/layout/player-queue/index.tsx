import React from 'react'
import { Image, Media } from '@/components'
import songs from '@/data/songs.json';

export const PlayerQueue = () => {
  return (
    <div className='player-queue px-2'>
      <div className="flex mt-5">
        <div className="group-button flex cursor-pointer">
          <div className="button playlist active">Danh sách phát</div>
          <div className="button recent">Nghe gần đây</div>
        </div>
        <div className="button clock">
          <Image
            src='/clock.png'
            alt='clock'
            width={34}
            height={34}
          />
        </div>
        <div className="clock !pb-4">...</div>
      </div>
      <div className="next px-2">Tiếp theo</div>
      <div className="from-playlist px-2">Từ playlist<span className='zing-chart'>#zingchart</span></div>

      <div className="container-list relative w-full">
        <div className="list overflow-x-hidden overflow-y-scroll inset-0 absolute px-2">
          {
            songs.data.items.slice(10, 40).map((song: any, index: number) => {
              return <Media
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
      </div>
    </div>
  )
}
