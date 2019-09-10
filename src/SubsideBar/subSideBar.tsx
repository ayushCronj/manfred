import { Table, Avatar, Row, Col, Icon, Button, Pagination } from "antd";
import * as React from "react";
import UserDetail from "../ViewUserDetail/UserDetail";
import NewUser from './newuser';
import { Translation } from "react-i18next";
import UserList from '../ViewUserDetail/UserList.json';
import { connect } from "react-redux";
import {addUser,deleteUser,EditUser} from '../redux/actions/userAction'

import "./subsidebar.scss";

interface IState {
  userDetail: any;
  newUser:boolean;
  showUser:boolean;
  index:number;
}
interface IProps{
  dataSource: any;
}

// const dataSource = [
//   {
//     key: "1",
//     title: "Mr.",
//     name: "Petr",
//     surname: "petr",
//     email: "peter@gmail.com",
//     link: "/user.png",
//     client: "foreway",
//     department: "sytemAdministrator",
//     phoneNumber: "1234567890",
//     Language: "English",
//     TimeZone: "UTC",
//     UnitSystem: "Metric"
//   },
//   {
//     key: "2",
//     title: "Mr",
//     name: "John",
//     surname: "petr",
//     email: "john@gmail.com",
//     link: "/user.png",
//     client: "foreway",
//     department: "sytemAdministrator",
//     phoneNumber: "1234567890",
//     Language: "English",
//     TimeZone: "UTC",
//     UnitSystem: "Metric"
//   }
// ];

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
  },
];

export class SubSideBar extends React.Component<IProps, IState> {
  state = {
    userDetail:"",
    newUser:false,
    showUser:false,
    index:0
  };
  public componentDidMount(): void {
   this.props.dataSource.map((item, index) => {
      if (index === 0) {
        this.setState({
          userDetail: item,
          newUser:false,
          showUser:true,
          index:index
        });
      }
    });
  }

  private handleUser = value => {
    this.props.dataSource.map((item, index) => {
      if (value === index) {
        this.setState({
          userDetail: item,
          newUser:false,
          showUser:true,
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
    console.log("thiside---",this.props)
    return (
      <div>
        <Row>
          <Col lg={8} xs={12} sm={12}>
             <button className="button" onClick={this.handleClick}>Add New User</button><Icon type="plus"/>
            {/* <Icon type="plus-circle" onClick={}/> */}
            <Table
              dataSource={this.props.dataSource}
              scroll={{x:200}}
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
            {this.state.showUser === true ? this.state.userDetail !== null ? (
              <UserDetail user={this.state.userDetail} index={this.state.index} />
            ) : null : this.state.newUser === true ? 
            <NewUser />
            :null }
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { dataSource : state.stateData.dataSource }
}
  export default connect(mapStateToProps)(SubSideBar);
