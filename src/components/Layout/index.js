import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import { HtecLogo } from "../../utils/contentConstant";
function Index({ children }) {
  const { Sider, Content } = Layout;
  const location = useLocation();
  const styles = {
    navIcons: { fontSize: 20 },
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
            icon={<HomeOutlined style={styles.navIcons} />}
          >
            <Link to="/" />
            Dashboard
          </Menu.Item>
          <Menu.Item
            className="nav-links"
            key="/customer"
            icon={<TeamOutlined style={styles.navIcons} />}
          >
            <Link to="/customer" />
            Customer
          </Menu.Item>
          <Menu.Item
            className="nav-links"
            key="/supplier"
            icon={<CodeSandboxOutlined style={styles.navIcons} />}
          >
            <Link to="/supplier" />
            Supplier
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ height: "100vh" }} className="site-layout">
        <Header collapsed={state.collapsed} toggle={toggle} />
        <Content
          style={{ overflowY: "auto" }}
          className="site-layout-background"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;
