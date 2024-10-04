'use client'

import React, { useState } from 'react'
import { SidebarDivider } from './sidebar-divider'
import { LoginZone } from './login-zone'
import { NewPlaylistButton } from './new-playlist-button'
import { Image } from '@/components'
import { Urls } from '@/common'

const sidebar = {
  dashboard: [
    {
      className: 'item',
      title: 'Thư viện',
      iconL: '/sidebar/1.svg',
    },
    {
      className: 'item',
      title: 'Khám phá',
      iconL: '/sidebar/1.svg',
    },
    {
      className: 'item',
      title: '#zingchart',
      iconL: '/sidebar/1.svg',
    },
    {
      className: 'item',
      title: 'Radio',
      iconL: '/sidebar/1.svg',
      iconR: '/live.svg',
    },
  ],
  other: [
    {
      className: 'item',
      title: 'BXH Nhạc Mới',
      iconL: '/sidebar/1.svg',
      iconR: '',
    },
    {
      className: 'item',
      title: 'Chủ đề & Thể Loại',
      iconL: '/sidebar/1.svg',
      iconR: '',
    },
    {
      className: 'item',
      title: 'Top 100',
      iconL: '/sidebar/1.svg',
      iconR: '',
    },
  ]
}

export const SideBarPart = (props: { part: 'dashboard' | 'other' }) => {
  const { part } = props;
  const [active, setIsActive] = useState('');

  const onClickSidebar = (index: number) => {
    setIsActive(`${part}[${index}]`);
  }

  return sidebar[part]?.map((s, index) => <div key={index}>
    <div
      onClick={() => onClickSidebar(index)}
      className={`flex ${s.className} ${active === `${part}[${index}]` ? 'is-active' : ''}`}
    >
      <Image
        src={s.iconL}
        alt='sidebar-icon'
        className='mr-3'
        width={20}
        height={20}
      />
      {s.title}
      {
        s.iconR ? <Image
          src={s.iconR ?? ''}
          alt='sidebar-icon'
          className='ml-2'
          width={34}
          height={16}
          style={{ height: '16px' }}
        /> : <></>
      }
    </div>
  </div>)
}

export const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className="sidebar-logo">
        <a href={Urls.zingmp3}>
          <Image
            src='/logo-dark.svg'
            alt='logo'
            width={120}
            height={40}
            className='hover:opacity-90'
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
      <SideBarPart part='dashboard' />
      <SidebarDivider />
      <div className="relative other">
        <div className="overflow-x-hidden overflow-y-scroll inset-0 absolute">
          <SideBarPart part='other' />
          <LoginZone />
        </div>
      </div>
      <NewPlaylistButton />
    </aside>
  )
}
