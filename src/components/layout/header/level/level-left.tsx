import React from 'react'
import { Arrow, Search } from '@/components'

export const LevelLeft = () => {
  return (
    <div className='flex'>
      <div>
        <Arrow type='left' />
        <Arrow type='right' />
      </div>
      <Search />
    </div>
  )
}
