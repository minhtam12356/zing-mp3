import React from 'react'
import { Image } from '@/components';

export const List = () => {
  const PARTNER_NUMBER = 16;
  return <div className="flex flex-wrap">
    {
      Array(PARTNER_NUMBER).fill(0).map((_, index) => {
        return <div key={`partner-${index}`} className="box flex items-center">
          <Image
            src={`/partners/${index + 1}.png`}
            alt='image'
            className=""
            width={100}
            height={100}
            style={{ objectFit: 'contain', height: '82%' }}
          />
        </div>
      })
    }

  </div>
}
