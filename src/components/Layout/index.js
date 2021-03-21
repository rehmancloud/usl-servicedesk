import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  CodeSandboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import { HtecLogo } from "../../utils/contentConstant";
import { Footer } from "antd/lib/layout/layout";
function Index({ children }) {
  const { Sider, Content } = Layout;
  const location = useLocation();
  const styles = {
    navIcons: { fontSize: 20 },
    sidebar: {
      // height: "100vh",
      // position: "fixed",
      // left: 0,
      // zIndex: 600,
    },
  };
  const [state, setState] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <Layout>
      <Sider
        collapsedWidth={65}
        width={180}
        trigger={null}
        collapsible
        collapsed={state.collapsed}
        style={styles.sidebar}
      >
        <img src={HtecLogo} alt="htec-Logo" className="customLogo" />
        <Menu
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
          theme="dark"
          mode="inline"
        >
          <Menu.Item
            className="nav-links"
            key="/"
            icon={<HomeOutlined className="leftIcon" style={styles.navIcons} />}
          >
            <Link to="/" />
            Dashboard
          </Menu.Item>
          <Menu.Item
            className="nav-links"
            key="/Customer"
            icon={<TeamOutlined className="leftIcon" style={styles.navIcons} />}
          >
            <Link to="/Customer" />
            Customer
          </Menu.Item>
          <Menu.Item
            className="nav-links"
            key="/Supplier"
            icon={
              <CodeSandboxOutlined
                className="leftIcon"
                style={styles.navIcons}
              />
            }
          >
            <Link to="/Supplier" />
            Supplier
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header collapsed={state.collapsed} toggle={toggle} />
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default Index;
