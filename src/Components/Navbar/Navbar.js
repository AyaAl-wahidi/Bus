import React, { useState } from 'react';
import { LoginOutlined, HomeOutlined,InfoCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import '../Navbar/Navbar.css'
const items = [
  {
    label: 'Home',
    key: 'Home',
    icon: <HomeOutlined />,
  },
  {
    label: 'AboutUs',
    key: 'AboutUs',
    icon: <InfoCircleOutlined />,
  },
  {
    label: 'Login',
    key: 'Login',
    icon: <LoginOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (    
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="custom-menu"
    />
  );
};

export default Navbar;
