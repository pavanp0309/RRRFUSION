import React from 'react'
import { Layout } from 'antd';
import UserProfile from './UserProfile';
const {Header}=Layout;


const HeaderComp = () => {
  return (
  <Header className='header'>
    <UserProfile/>
  </Header>
  )
}

export default HeaderComp
