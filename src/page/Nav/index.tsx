import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: (<Link style={{ color: '#ffffff'}} to="/" > 首页 </Link>),
  },
  {
    key: '2',
    label: (<Link style={{ color: '#ffffff'}} to="discover" > 发现 </Link>),
  },
];

const Nav: React.FC = () => <Tabs style={{ backgroundColor: '#fb596c' }} defaultActiveKey="1" items={items} onChange={onChange} />;

export default Nav;
