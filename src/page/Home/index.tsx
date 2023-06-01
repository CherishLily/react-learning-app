import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';


import './index.css';
export interface HomeProps {
}

const items: TabsProps['items'] = [
    {
      key: '1',
      label: (<Link to='/follow'>关注</Link>),
    },
    {
      key: '2',
      label: (<Link to='/hot'>热榜</Link>),
    },
    {
        key: '3',
        label: (<Link to='/'>推荐</Link>),
    },
  ];

export default function Home (props: HomeProps) {
  return (
    <div className='home-page'>
        <div className='top-background' />
        <div className='content'>
            <div className="main">
                <div className='inner-tab'>
                    {/* <Tabs defaultActiveKey="3" items={items} /> */}
                    <Link to='/follow'>关注</Link>
                    <Link to='/hot'>热榜</Link>
                    <Link to='/'>推荐</Link>
                </div>

                <Outlet />
            </div>
            <div className='sidebar'>
                sidebar
            </div>
        </div>
    </div>
  );
}
