import React from 'react'
import { Image } from '@/components'

export const PlayerQueue = () => {
  return (
    <div className='player-queue'>
      <div className="flex mt-5 px-2">
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
      <div className="">Tiếp theo</div>
    </div>
  )
}
