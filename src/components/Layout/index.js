import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import { HtecLogo } from "../../utils/contentConstant";
function Index({ children }) {
  const { Sider, Content } = Layout;
  const styles = {
    navIcons: { fontSize: 20 },
    sidebar: {
      height: "100vh",
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            className="nav-links"
            key="1"
            icon={<HomeOutlined style={styles.navIcons} />}
          >
            <Link to="/" />
            Dashboard
          </Menu.Item>
          <Menu.Item
            className="nav-links"
            key="2"
            icon={<TeamOutlined style={styles.navIcons} />}
          >
            <Link to="/Customer" />
            Customer
          </Menu.Item>
          <Menu.Item
            className="nav-links"
            key="3"
            icon={<CodeSandboxOutlined style={styles.navIcons} />}
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
