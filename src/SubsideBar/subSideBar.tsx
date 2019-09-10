import { Table, Avatar, Row, Col,Icon,Button} from "antd";
import * as React from "react";
import UserDetail from "../ViewUserDetail/UserDetail";
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
    title: "profilepic",
    dataIndex: "link",
    key: "link",
    render: link => <Avatar src={link} />
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
 
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },

  {
    title: "Client",
    dataIndex: "client",
    key: "client"
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department"
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
          <Col lg={8}>
            <button></button>{/* <Icon type="plus-circle" onClick={}/> */}
            <Table
              dataSource={dataSource}
              // size="small"
              scroll={{x:200}}
              columns={columns}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    this.handleUser(rowIndex);
                  }
                };
              }}
            />
          </Col>
          <Col lg={16}>
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
