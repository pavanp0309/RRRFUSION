import React from 'react'
import { Avatar, Menu} from 'antd';
import{ Dropdown  } from "antd";
import { UserOutlined ,SettingOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';


const UserProfile = ({imgUrl}) => {
//  home Profile settings Logout and Logoin
const menu=(
    <Menu>
       <Menu.Item  key="1" icon={<HomeOutlined/>}>Home</Menu.Item>
       <Menu.Item  key="2" icon={<UserOutlined/>}>Profile</Menu.Item>
       <Menu.Item  key="3" icon={<SettingOutlined/>}>Settings</Menu.Item>
       <Menu.Item  key="4" icon={<LogoutOutlined/>}>Logout</Menu.Item>
    </Menu>
)

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
       <Avatar 
         src={imgUrl||""}
        
        size="large" 
        icon={imgUrl?<UserOutlined />:null}
        />
    </Dropdown>
  )
}

export default UserProfile
