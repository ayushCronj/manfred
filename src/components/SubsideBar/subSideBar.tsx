import { Table, Row, Col, Icon, Avatar } from "antd";
import * as React from "react";
import UserDetail from "../ViewUserDetail/UserDetail";
import NewUser from "./newuser";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import "./subsidebar.scss";

interface IState {
  userDetail: any;
  newUser: boolean;
  showUser: boolean;
  index: number;
  options:any;
  checkboxesValues:boolean;
}
interface IProps {
  dataSource: any;
}



const columns = [
  {
    title: <Translation>{t => t("profile_pic")}</Translation>,
    key: "avatar",
    render: link => <Avatar src="/avatar.png" />
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
  {
    title: "",
    render: () => <Icon type="arrow-right" />,
    key: "info"
  }
];

export class SubSideBar extends React.Component<IProps, IState> {
  state = {
    userDetail: "",
    newUser: false,
    showUser: false,
    index: 0,
    options:[],
    checkboxesValues:false
    
   
  };

  public componentDidMount(): void {
    this.props.dataSource.map((item, index) => {
      if (index === 0) {
        this.setState({
          userDetail: item,
          newUser: false,
          showUser: true,
          index: index
        });
      }
    });
  }

  public componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource.length > 0) {
      nextProps.dataSource.map((item, index) => {
        if (index === 0) {
          this.setState({
            userDetail: item,
            index: index
          });
        }
      });
    } else {
      this.setState({
        userDetail: "",
        index: 0
      });
    }
  }

  private handleUser = value => {
    this.props.dataSource.map((item, index) => {
      if (value === index) {
        this.setState({
          userDetail: item,
          index: index,
          newUser: false,
          showUser: true
        });
      }
    });
  };



  private handleClick = value => {
    this.setState({
      newUser: !this.state.newUser,
      showUser: false
    });
  };

  private HandleSubmit = value => {
    this.setState({
      newUser: !this.state.newUser,
      showUser: true
    });
  };



  

  render() {
    return (
      <div>
        <Row>
          <Col lg={8} xs={24} sm={24}>
            <button className="button" onClick={this.handleClick}>
              <Translation>{t => t("addnewuser")}</Translation>
              <Icon type="plus" />
            </button>
            {/* <Table
            className="userTable"
              dataSource={this.props.dataSource}
              scroll={{ x: 200 }}
              columns={columns}
              pagination={{ hideOnSinglePage: true }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    this.handleUser(rowIndex);
                  }
                };
              }}
            /> */}
            <div>
              <table id="customers">
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>ProfilePic</th>
       
                </tr>
                {this.props.dataSource.map((item1, index1) => {
                  return (
                    
                    <DragDropContainer dragData={{ item1 }} targetKey="foo">
                      <tr key={index1} onClick={() => this.handleUser(index1)}>
                        <td>{item1.email}</td>
                        <td>{item1.name}</td>

                        <td>
                          <Avatar src={item1.link} />
                        </td>
                      </tr>
                    </DragDropContainer>
                  );
                })}
              </table>
            </div>
          </Col>
          <Col lg={16} xs={24} sm={24}>
            {this.state.showUser === true ? (
              this.state.userDetail ? (
                <div className="userContents">
                  <UserDetail
                    user={this.state.userDetail}
                    index={this.state.index}
                  />
                </div>
              ) : null
            ) : this.state.newUser === true ? (
              <NewUser HandleSubmit={this.HandleSubmit} />
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { dataSource: state.stateData.dataSource };
};

export default connect(mapStateToProps)(SubSideBar);
