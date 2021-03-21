import React from "react";
import { Layout, Menu, Dropdown, Badge, PageHeader } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ExpandOutlined,
  BellOutlined,
  LogoutOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import "./index.css";
function Index({ collapsed, toggle }) {
  const { Header } = Layout;
  const toggleFullscreen = () => {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };
  const menuList = (
    <Menu>
      <Menu.Item style={{ padding: 10 }} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="main-header" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined className="toggle-btn" onClick={toggle} />
      ) : (
        <MenuFoldOutlined className="toggle-btn" onClick={toggle} />
      )}
      <Dropdown className="dropdown" overlay={menuList} trigger={["click"]}>
        <span className="header-link">
          Admin <CaretDownOutlined />
        </span>
      </Dropdown>

      <ExpandOutlined className="header-btn" onClick={toggleFullscreen} />
      <Badge showZero className="bell-icon" size="small" count={0}>
        <BellOutlined onClick={() => {}} />
      </Badge>
    </Header>
  );
}

export default Index;
