import React from 'react'
import { Header, PlayerQueue, SideBar } from '@/components';

export const Body = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div className='container relative mt-20'>{children}</div>
  )
}

export const Main = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div id="main-application">
      <SideBar />

      <Header />
      <Body>
        <div className="body section overflow-x-hidden overflow-y-scroll inset-0 absolute">{children}</div>
      </Body>
      <PlayerQueue />
    </div>
  )
}
