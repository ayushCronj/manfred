import * as React from "react";
import "./ViewUserDetail.scss";
import { Icon } from "antd";
import { Translation } from "react-i18next";
import{connect} from 'react-redux'
import {addUser,deleteUser,EditUser} from '../redux/actions/userAction'
import EditModal from '../../src/components/EditModal'

interface IProps {
  name?: string;
  address?:  string;
  key?:any;
  link?:string;
  user:any;
  index:number;
  deleteUser:any;
  userEditDetail:any;
  editindex:number;
  EditUser:any;
}

class UserDetail extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <div>
        <EditModal  userEditDetail={this.props.user} editindex={this.props.index}/>
          <Icon
            type="delete"
            style={{ float: "right" , fontSize:"25px" }}
            onClick={() => this.props.deleteUser(this.props.index)}
          />
          {/* <p className="user-name"> */}
            <h2>
              {this.props.user.name}&nbsp;{this.props.user.surname}
            </h2>
          {/* </p> */}
          <p className="email">{this.props.user.email}</p>
        </div>
        <hr />
        <div className="profile-detail">
          <div className="profile-img">
            <img src={this.props.user.link} />
          </div>
          <div className="user-detail">
            <div className="detail">
              <div className="title">
                <Translation>{t => t("title1")}</Translation>
              </div>
              <div className="title-value">{this.props.user.title}</div>
            </div>
            <div className="detail">
              <div className="title">
                <Translation>{t => t("name")}</Translation>
              </div>
              <div className="title-value">{this.props.user.name}</div>
            </div>
            <div className="detail">
              <div className="title">
                <Translation>{t => t("surname")}</Translation>
              </div>
              <div className="title-value">{this.props.user.surname}</div>
            </div>
            <div className="detail">
              <div className="title">
                <Translation>{t => t("email")}</Translation>
              </div>
              <div className="title-value">{this.props.user.email}</div>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <span>
            <Icon type="contacts" />
            {/* </span>
          <span> */}{" "}
            <Translation>{t => t("company")}</Translation>{" "}
          </span>
          <p>
            {" "}
            <Translation>{t => t("content")}</Translation>
          </p>
          <div className="client">
            <div className="client-title">
              <Translation>{t => t("client")}</Translation>:
            </div>
            <div className="client-title-value">{this.props.user.client}</div>
          </div>
          <div className="department">
            <div className="department-title">
              <Translation>{t => t("department")}</Translation>:
            </div>
            <div className="department-title-value">
              {this.props.user.department}
            </div>
          </div>
          <div className="phoneNumber">
            <div className="phoneNumber-title">
              <Translation>{t => t("phone_number")}</Translation>:
            </div>
            <div className="phoneNumber-title-value">
              {this.props.user.phoneNumber}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <span>
            <Icon type="info" />
            {/* </span>
          <span> */}{" "}
            <Translation>{t => t("language&religion")}</Translation>{" "}
          </span>
          <p>
            {" "}
            <Translation>{t => t("content")}</Translation>{" "}
          </p>
          <div className="system">
            <div className="system-title">
              <Translation>{t => t("language")}</Translation>:
            </div>
            <div className="system-title-value">{this.props.user.Language}</div>
          </div>
          <div className="system">
            <div className="system-title">
              <Translation>{t => t("timezone")}</Translation>:
            </div>
            <div className="system-title-value">{this.props.user.TimeZone}</div>
          </div>
          <div className="system">
            <div className="system-title">
              <Translation>{t => t("unitsystem")}</Translation>:
            </div>
            <div className="system-title-value">
              {this.props.user.UnitSystem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: index => dispatch(deleteUser(index))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserDetail);
