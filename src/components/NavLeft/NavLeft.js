import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';

const SubMenu = Menu.SubMenu;

const renderMenu = data => {
  return data.map(({ title, key, children }) => {
    if (children) {
      return (
        <SubMenu title={title} key={key}>
          {renderMenu(children)}
        </SubMenu>
      );
    }
    return <Menu.Item key={key}>{title}</Menu.Item>;
  });
};

const NavLeft = () => {
  const [current] = useState('');
  const [menuTreeNode, setMenuTreeNode] = useState(null);

  useEffect(() => {
    setMenuTreeNode(renderMenu(MenuConfig));
  }, []);

  const handleClick = () => {};

  return (
    <div className='nav-left'>
      <Menu
        theme='dark'
        onClick={handleClick}
        style={{ width: 200 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode='inline'
      >
        {menuTreeNode}
      </Menu>
    </div>
  );
};

export default NavLeft;
