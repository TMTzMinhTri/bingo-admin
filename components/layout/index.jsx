import { Layout } from 'antd';
import { useMemo } from "react";
import { UserOutlined, MehOutlined } from '@ant-design/icons';

import { SideBar } from "./sidebar";
import { TopBar } from "./topBar";

const { Content, Footer } = Layout;

export function Wrapper({ children }) {
    const menus = useMemo(() => [
        {
            name: "Home",
            key: "home",
            icon: <UserOutlined />,
            path: "/"
        },        {
            name: "Clients",
            key: "clients",
            icon: <MehOutlined />,
            path: '/clients'
        },
    ], [])

    return <Layout className="wrapper">
        <SideBar menus={menus} />
        <Layout>
            <TopBar />
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background">
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
}