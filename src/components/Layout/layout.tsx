import React from "react";
import "./layout.scss";
import { Redirect } from "react-router-dom";
import { Layout, Icon, Menu, Avatar, Button, Dropdown, Modal } from "antd";
import { Translation } from "react-i18next";
import i18n from "../../i18n";
import SingleUser from "../SubsideBar/singleUser";
import SubSideBar from "../SubsideBar/subSideBar";
import { DropTarget } from "react-drag-drop-container";
const { Header, Sider, Content } = Layout;

interface Istate {
  collapsed: boolean;
  redirect?: boolean;
  language?: string;
  data?: any;
  showAll: boolean;
  showGroup: boolean;
  dropMessage: boolean;
  groupName:string;
  visible:boolean;
}

class layout extends React.Component<{}, Istate> {
  state = {
    collapsed: false,
    redirect: false,
    language: "Eng",
    groupName:"",
    data: [
      {
        groupName: "group1",
        users: []
      },
      {
        groupName: "group2",
        users: []
      }
    ],
    showAll: true,
    showGroup: false,
    dropMessage: true,
    visible:false
  };

  public componentDidMount(): void {
    if (localStorage.getItem("user") === null) {
      this.setState({
        redirect: true
      });
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  menuClicked = key => {
    if (key.key === "1") {
      this.setState({
        showAll: true,
        showGroup: false
      });
    } else if (key.key === "2") {
      this.setState({
        showAll: false,
        showGroup: true,
        groupName:"group1",
      });
    }
    else if (key.key === "3") {
      this.setState({
        showAll: false,
        showGroup: true,
        groupName:"group2",
      });
    }
  };

  dropped = (ev, groupName) => {
    this.state.data.map((item: any) => {
      if (item.groupName === groupName){
        ev.dragData.arr.map((val: any) => {
          item.users.push(val);
          console.log(item)
        })
      }
    })
    this.setState({
      visible:true
     });
  };

  public handlelogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    localStorage.removeItem("isLoggedIn");
    localStorage.setItem("isLoggedIn", "false");
    this.setState({
      redirect: true
    });
  };

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const menu = (
      <Menu>
        <Menu.Item
          onClick={() => {
            this.setState({
              language: "Eng"
            });
            i18n.changeLanguage("en");
          }}
        >
          Eng
        </Menu.Item>
        <Menu.Item
          className="nav_menu"
          onClick={() => {
            this.setState({
              language: "De"
            });
            i18n.changeLanguage("de");
          }}
        >
          De
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Sider
          className="layout_sider"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          breakpoint="lg"
        >
          <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button key="ok" type="primary" onClick={this.handleOk}>
                Ok
            </Button>
        ]}
        ><h3>User Added to group</h3></Modal>
          {console.log(this.state.data)}
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              onClick={key => {
                this.menuClicked(key);
              }}
            >
              <Icon type="user" />
              <span>
                <Translation>{t => t("show_users")}</Translation>
              </span>
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={key => {
                this.menuClicked(key);
              }}
            >
              <DropTarget targetKey="foo" onHit={(ev) => {this.dropped(ev, "group1")}}>
                <Icon type="info" />
                <span>Group 1</span>
              </DropTarget>
              {this.state.dropMessage === true ? <h1>Added</h1> : null}
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={key => {
                this.menuClicked(key);
              }}
            >
              <DropTarget targetKey="foo" onHit={(ev) => {this.dropped(ev, "group2")}}>
                <Icon type="info" />
                <span>Group 2</span>
              </DropTarget>
              {this.state.dropMessage === true ? <h1>Added</h1> : null}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="app_header">
            <div className="layout_div">
              <Dropdown overlay={menu}>
                <a href="#">
                  {this.state.language}
                  <Icon type="down" />
                </a>
              </Dropdown>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Avatar className="header_avatar" src="/avatar.png">
                {" "}
                Photo{" "}
              </Avatar>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                className="header_button"
                type="primary"
                onClick={this.handlelogout}
              >
                {" "}
                <Translation>{t => t("logout")}</Translation>{" "}
              </Button>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#EBEDEF",
              minHeight: 280
            }}
          >
            {this.state.showAll === true ? (
              <SubSideBar />
            ) : (
              <div>
          {this.state.groupName === "group1" ? 
              <SingleUser members={this.state.data[0].users} />
              :  <SingleUser members={this.state.data[1].users} /> }
            </div>) }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default layout;
