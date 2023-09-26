import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Header";
import { SideBar } from "./SideBar";


export const LayoutComponent:FC = ()=> {

    const {Content} = Layout;
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavBar />
        <Layout>
          <SideBar />
          <Layout>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
