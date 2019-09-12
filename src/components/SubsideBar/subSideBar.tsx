import { Table, Row, Col, Icon, Avatar } from "antd";
import * as React from "react";
import UserDetail from "../ViewUserDetail/UserDetail";
import NewUser from "./newuser";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import "./subsidebar.scss";
import { array } from "prop-types";

interface IState {
  userDetail: any;
  newUser: boolean;
  showUser: boolean;
  index: number;
  option?: any;
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
    option: [-1]
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

  onChange(e) {
    console.log(e.target.value);
    const option = this.state.option;
    // const option : string[] = [];
    let index;
    if (e.target.checked) {
      option.push(+e.target.value);
    } else {
      index = option.indexOf(+e.target.value);
      option.splice(index, 1);
    }

    this.setState({ option: option });
  }

  render() {
    console.log(this.state.option);
    let arr=[] as any;
    return (
      <div>
        <Row>
          <Col lg={8} xs={24} sm={24} style={{paddingRight:'22px'}}>
            <button className="button" onClick={this.handleClick}>
              <Translation>{t => t("addnewuser")}</Translation>
              <Icon type="plus" />
            </button>
            <div>
              {this.state.option.length > 1 ? (
    
                <div>
                {this.props.dataSource.map((item, index) => {
                  if(this.state.option.includes(index)){
                    arr.push(item)
                  }})}
                  </div>
              ) : null}
              {this.state.option.length > 1 ? (
                <div>
                   <DragDropContainer dragData={{ arr}} targetKey="foo" dragClone ="true">
                  <table className="userList">
                    {this.props.dataSource.map((item, index) => {
                      if(this.state.option.includes(index)){
                      return (<tr key={index} style={{border:'1px solid black', backgroundColor:'skyblue'}}>
                        <td>
                          <Avatar src="avatar.png" />
                        </td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>
                          <Icon type="arrow-right" />
                        </td>
                      </tr>)
                      }
                    })}
                  </table>
                  </DragDropContainer>
                </div>
              ) : null}
              <table className="userList">
                <br></br>
                <br></br>
                {this.props.dataSource.map((item1, index1) => {
                  return (
                    // <DragDropContainer dragData={{ item1 }} targetKey="foo">
                      <tr key={index1} onClick={() => this.handleUser(index1)} style={{border:'1px solid black'}}>
                          <td>
                          <input
                            type="checkbox"
                            value={index1}
                            onChange={this.onChange.bind(this)}
                          />
                        </td><td>
                          <Avatar src="/avatar.png" />
                        </td>
            
                        <td>{item1.email}</td>
                        <td>{item1.name}</td>
                        <td>
                          <Icon type="arrow-right" />
                        </td>
                      </tr>
                    // </DragDropContainer>
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
