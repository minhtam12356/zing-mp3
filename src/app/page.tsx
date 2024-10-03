import React from 'react'
import { AlbumHot, Chill, Home, HotTrending, New, NewRanking, Partner, Radio, Recent, Top100, ZingChart } from '@/components'

const page = () => {
  return (
    <div>
      <Home />
      <Recent />
      <New />
      <HotTrending />
      <Chill />
      <NewRanking />
      <ZingChart />
      <Top100 />
      <AlbumHot />
      <Radio />
      <Partner />
    </div>
  )
}

export default page