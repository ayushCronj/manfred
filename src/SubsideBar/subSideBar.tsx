import { Table, Avatar, Row, Col, Icon, Button, Pagination } from "antd";
import * as React from "react";
import UserDetail from "../ViewUserDetail/UserDetail";
import { Translation } from "react-i18next";
import "./subsidebar.scss";
interface IState {
  userDetail: any;
}

const dataSource = [
  {
    key: "1",
    title: "Mr.",
    name: "Petr",
    surname: "petr",
    email: "peter@gmail.com",
    link: "/user.png",
    client: "foreway",
    department: "sytemAdministrator",
    phoneNumber: "1234567890",
    Language: "English",
    TimeZone: "UTC",
    UnitSystem: "Metric"
  },
  {
    key: "2",
    title: "Mr",
    name: "John",
    surname: "petr",
    email: "john@gmail.com",
    link: "/user.png",
    client: "foreway",
    department: "sytemAdministrator",
    phoneNumber: "1234567890",
    Language: "English",
    TimeZone: "UTC",
    UnitSystem: "Metric"
  }
];

const columns = [
  {
    // title: "Profile Pic",
    title: <Translation>{t => t("profile_pic")}</Translation>,
    dataIndex: "link",
    key: "link",
    render: link => <Avatar src={link} />
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  }
];

export class SubSideBar extends React.Component<{}, IState> {
  public componentDidMount(): void {
    dataSource.map((item, index) => {
      if (index === 0) {
        this.setState({
          userDetail: item
        });
      }
    });
  }

  private handleUser = value => {
    dataSource.map((item, index) => {
      if (value === index) {
        this.setState({
          userDetail: item
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col lg={8} xs={12} sm={12}>
            <button></button>
            {/* <Icon type="plus-circle" onClick={}/> */}
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={{hideOnSinglePage:true}}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    this.handleUser(rowIndex);
                  }
                };
                
              }}
            />
          </Col>
          <Col lg={16} xs={12} sm={12}>
            {this.state !== null ? (
              <UserDetail user={this.state.userDetail} />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
export default SubSideBar;
