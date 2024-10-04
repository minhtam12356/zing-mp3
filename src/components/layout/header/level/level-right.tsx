import React from 'react'
import { Image } from '@/components'

export const LevelRight = () => {
  return (
    <div className='flex level-right w-full justify-end'>
      <div className="button upgrade">Nâng cấp tài khoản</div>
      <div className="button download">Tải bản macOS</div>
      <div className="setting">
        <Image
          src='/settings.png'
          alt='setting'
          width={18}
          height={18}
        />
      </div>
      <div className="profile">
        <Image
          src='/user.png'
          alt='profile'
          width={38}
          height={38}
        />
      </div>
    </div>
  )
}
