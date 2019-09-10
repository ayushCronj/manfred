import React from "react";
import "./layout.scss";
import { Layout, Icon, Menu, Avatar, Button } from "antd";
const { Header, Sider, Content } = Layout;

interface Istate {
  collapsed: boolean;
}

class layout extends React.Component<{}, Istate> {
  state = {
    collapsed: false
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  public handlelogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    localStorage.setItem("isLoggedIn","false");
  };

  public render() {
    return (
      <Layout>
        <Sider
          className="layout_sider"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Show Users</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Add a new user</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Option 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="video-camera" />
              <span>Option 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="video-camera" />
              <span>Option 5</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="app_header">
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "2.5" }}>
              <Menu.Item className="layout_icon">
                <Icon
                  className="trigger layout_icon"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Menu.Item>
              <Menu.Item className="header_item">
                <Button type="primary" onClick={this.handlelogout}>
                  {" "}
                  Logout{" "}
                </Button>
              </Menu.Item>
              <Menu.Item className="header_item">
                <Avatar className="header_item" src="/avatar.png">
                  {" "}
                  Photo{" "}
                </Avatar>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default layout;
