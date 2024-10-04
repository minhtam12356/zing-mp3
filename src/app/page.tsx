import { AlbumHot, Chill, Home, HotTrending, Partner, Top100 } from '@/components'

const page = () => {
  return (
    <div>
      <Home />
      {/* <Recent /> */}
      {/* <New /> */}
      <HotTrending />
      <Chill />
      {/* <NewRanking /> */}
      {/* <ZingChart /> */}
      <Top100 />
      <AlbumHot />
      {/* <Radio /> */}
      <Partner />
    </div>
  )
}

export default page