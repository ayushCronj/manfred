import React from "react";
import "./layout.scss";
import { Redirect } from "react-router-dom";
import { Layout, Icon, Menu, Avatar, Button, Dropdown } from "antd";
import { Translation } from "react-i18next";
import i18n from "../../i18n";
import SubSideBar from "../SubsideBar/subSideBar";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

// import { useDrop } from "react-dnd";
// import { DragItem } from "./interface";
const { Header, Sider, Content } = Layout;

interface Istate {
  collapsed: boolean;
  redirect?: boolean;
  language?: string;
  data?: any;
}

interface IProps {
  onDrop: (item: any) => void;
}
class layout extends React.Component<IProps, Istate> {
  state = {
    collapsed: false,
    redirect: false,
    language: "Eng",
    data: []
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

  dropped = ev => {
    // console.log(ev.dragData);
    this.setState({
      data: [...this.state.data, ev.dragData]
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

    // const { onDrop } = this.props;
    // const [{ isOver, canDrop }, drop] = useDrop({
    //   accept: ["Colors.YELLOW, Colors.BLUE"],
    //   drop(item: DragItem) {
    //     onDrop(item.type);
    //     return undefined;
    //   },
    //   collect: monitor => ({
    //     isOver: monitor.isOver(),
    //     canDrop: monitor.canDrop(),
    //     draggingColor: monitor.getItemType() as string
    //   })
    // })

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
          {console.log(this.state.data)}
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>
                <Translation>{t => t("show_users")}</Translation>
              </span>
            </Menu.Item>
            <Menu.Item>
              <DropTarget targetKey="foo" onHit={this.dropped}>
                <Icon type="info" />
                <span>Group 1</span>
              </DropTarget>
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
            <SubSideBar />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default layout;
