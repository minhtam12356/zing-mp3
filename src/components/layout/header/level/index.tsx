import React from 'react'
import { LevelLeft } from './level-left'
import { LevelRight } from './level-right'

export const Level = () => {
  return (
    <div className='flex justify-between items-center mt-5 level'>
      <LevelLeft />
      <LevelRight />
    </div>
  )
}
