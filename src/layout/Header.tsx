import { BellOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Input, Menu, MenuProps, Space, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { FC } from "react";

export const NavBar: FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: "Group title",
    },
    {
      key: "1",
      type: "group",
      label: "Group title",
    },
    {
      key: "1",
      type: "group",
      label: "Group title",
    },
  ];

  const { Search } = Input;
  const { Title } = Typography;


  return (
    <>
      <Header
        className="header"
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <Title level={2}>
          HRMS
        </Title>
        <Search placeholder="input search text" style={{ width: 200 }} />

        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">Files</Menu.Item>
          <Menu.Item key="2">Files</Menu.Item>
          <Menu.Item key="3">Files</Menu.Item>
          <Menu.Item key="4">Files</Menu.Item>
          <Menu.Item key="5">Files</Menu.Item>
          <Menu.Item key="6">
            <Badge count={+99} overflowCount={10} size="default">
              <BellOutlined style={{ fontSize: "20px" }} />
            </Badge>
          </Menu.Item>
          <Menu.Item key="7">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar
                    style={{ backgroundColor: "#66de33" }}
                    icon={<UserOutlined />}
                  />
                  Mohamed Nogot
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};
