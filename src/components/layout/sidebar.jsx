import { Menu, Layout } from 'antd';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Link from 'next/link'
const { Sider } = Layout;

export function SideBar({menus}) {
    const router = useRouter()
    const [selectedKey, setSelectedKey] = useState(menus.find(_menu => router.pathname.startsWith(_menu.path)).key)
    const selectMenu = ({ key }) => {
        const clicked = menus.find(_menu => _menu.key === key)
        router.push(clicked.path)
    }
    useEffect (() => {
        const key = menus.find(it => it.path === router.pathname).key
        setSelectedKey(key)
    }, [router])

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
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} onClick={selectMenu}>
            {menus.map((item) => ( 
            <Menu.Item key={item.key} icon={item.icon}>
                {item.name}
            </Menu.Item>))}
        </Menu>
    </Sider>
}