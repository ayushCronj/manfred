import { Table, Avatar, Row, Col,Icon,Button} from "antd";
import * as React from "react";
import UserDetail from "../ViewUserDetail/UserDetail";
import NewUser from './newuser';
import "./subsidebar.scss";

interface IState {
  userDetail: any;
  newUser:boolean;
  showUser:boolean;
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
];

export class SubSideBar extends React.Component<{}, IState> {
  state = {
    userDetail:null,
    newUser:false,
    showUser:false,
  };
  public componentDidMount(): void {
    dataSource.map((item, index) => {
      if (index === 0) {
        this.setState({
          userDetail: item,
          newUser:false,
          showUser:true,
        });
      }
    });
  }

  private handleUser = value => {
    dataSource.map((item, index) => {
      if (value === index) {
        this.setState({
          userDetail: item,
          newUser:false
        });
      }
    });
  };

  private handleClick = value => {
        this.setState({
          newUser: true,
          showUser:false
          // userDetail: null
        });
      }


  render() {
    return (
      <div>
        <Row>
          <Col lg={8}>
            <button className="button" onClick={this.handleClick}>Add New User</button><Icon type="plus"/>
            <Table
              dataSource={dataSource}
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
            {this.state.showUser === true ? this.state.userDetail !== null ? (
              <UserDetail user={this.state.userDetail} />
            ) : null : this.state.newUser === true ? 
            <NewUser />
            :null }
          </Col>
        </Row>
      </div>
    );
  }
}
export default SubSideBar;
