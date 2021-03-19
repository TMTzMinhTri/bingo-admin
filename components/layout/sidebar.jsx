import { Menu, Layout } from 'antd';

import Link from 'next/link'
const { Sider } = Layout;

export function SideBar({ menus }) {
    return <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
    >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            {menus.map(it => <Menu.Item key={it.key} icon={it.icon}>
                <Link href='/'>{it.name}</Link>
            </Menu.Item>)}
        </Menu>
    </Sider>
}