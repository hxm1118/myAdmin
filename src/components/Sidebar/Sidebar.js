/*
 * Created: 2020-04-29 12:07:01
 * Author : 黄雪梅
 * Last Modified: 2020-04-29 16:46:08
 * Modified By: 黄雪梅
 * Copyright (c) 2019. 深圳奥雅纳智能科技有限公司. All Rights Reserved.
 */

import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import './Sidebar.scss'

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Header extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    // this.setState({
    //   collapsed: !this.state.collapsed,
    // });
  };

  render() {
    return (
      <div style={{ width: 256 }} className="sidebar">
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        <div className="df ac sidebar-title">
          <img src={require("./../../images/logo.png")} />
          <h1>后台管理系统</h1>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <ContainerOutlined />
            <span>Option 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <PieChartOutlined />
            <span>Option 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <DesktopOutlined />
            <span>Option 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <ContainerOutlined />
            <span>Option 6</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}