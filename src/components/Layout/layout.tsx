import React from 'react';
import './layout.scss';
import { Redirect } from 'react-router-dom';
import { Layout, Icon, Menu, Avatar, Button, Dropdown } from 'antd';
import { Translation } from 'react-i18next';
import i18n from '../../i18n'

const { Header, Sider, Content } = Layout;


interface Istate {
    collapsed: boolean,
    redirect?: boolean
}

class layout extends React.Component<{}, Istate> {
    state = {
        collapsed: false,
        redirect: false
    };

    public toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    public handlelogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('pass');
        localStorage.removeItem('isLoggedIn');
        this.setState({
            redirect: true
        })
    }

    public render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }

        const menu = (
            <Menu>
                <Menu.Item
                    onClick={() => i18n.changeLanguage('en')}
                >
                    Eng
                </Menu.Item>
                <Menu.Item
                    className="nav_menu"
                    onClick={() => i18n.changeLanguage('de')}
                >
                    De
                </Menu.Item>
            </Menu>
        );
        
        return (
            <Layout>
                <Sider className="layout_sider" trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
                        <Menu theme="dark" mode="horizontal"
                            style={{ lineHeight: "2.5" }}>
                            <Menu.Item className="layout_icon">
                                <Icon

                                    className="trigger layout_icon"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown
                                    overlay={menu}
                                >
                                    <a href="#">
                                        Eng
										<Icon type="down" />
                                    </a>
                                </Dropdown>

                            </Menu.Item>
                            <Menu.Item className="header_item" >
                                <Button type="primary" onClick={this.handlelogout}> Logout </Button>
                            </Menu.Item>
                            <Menu.Item className="header_item">
                                <Avatar className="header_item" src="/avatar.png"> Photo </Avatar>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Translation>
                            {
                                (t) => <h1>{t('title')}</h1>
                            }
                        </Translation>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default layout;
