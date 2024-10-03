import React from 'react'
import { SidebarDivider } from './sidebar-divider'
import { LoginZone } from './login-zone'
import { NewPlaylistButton } from './new-playlist-button'

export const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className="">Logo</div>
      <div className="">
        <div className="">Thư viện</div>
        <div className="">Khám phá</div>
        <div className="">#zingchart</div>
        <div className="">Radio</div>
      </div>
      <SidebarDivider />
      <div className="">
        <div className="">BXH nhạc mới</div>
        <div className="">Chủ đề & Thể Loại</div>
        <div className="">Top 100</div>
      </div>
      <LoginZone />
      <NewPlaylistButton />
    </aside>
  )
}
