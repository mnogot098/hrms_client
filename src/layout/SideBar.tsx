import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { FC, useState } from "react";

export const SideBar:FC = () => {

    const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
    return (
        <>
        <Sider style={{backgroundColor:"white"}} onCollapse={toggleCollapse}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Module1</Menu.Item>
              <Menu.Item key="2">Module1</Menu.Item>
              <Menu.Item key="3">Module1</Menu.Item>
              <Menu.Item key="4">Module1</Menu.Item>
              <Menu.Item key="5">Module1</Menu.Item>
              <Menu.Item key="6">Module1</Menu.Item>
            </Menu>
          </Sider>
        </>
    )
}