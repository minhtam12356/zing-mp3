import React from 'react'
import { Header, PlayerQueue, SideBar } from '@/components';

export const Body = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div className='section mt-20'>{children}</div>
  )
}

export const Main = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div id="main-application">
      <SideBar />

      <Header />
      <Body>
        {children}
        <PlayerQueue />
      </Body>
    </div>
  )
}
