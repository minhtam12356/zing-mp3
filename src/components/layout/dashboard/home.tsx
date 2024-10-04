import React from 'react'
import { Gallery } from './gallery'
import songs from '@/data/home.json';

export const Home = () => {
  return (
    <div className='mt-10'>
      <Gallery songs={songs.data.items.slice(0, 1)[0].items} />
    </div>
  )
}
