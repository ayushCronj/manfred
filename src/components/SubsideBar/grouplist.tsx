import * as React from "react";
import { Table, Row, Col, Icon, Avatar } from "antd";
interface IState {}

interface IProps {
  user: any;
}

class GroupList extends React.Component<IProps, IState> {
  state = {};
  public render(): React.ReactNode {
    console.log(this.props.user.item1.name);
    return (
      <div className="details">
        <div className="card">
          <img src="/avatar.png" style={{ height: "136px" }}></img>
          <h1 className="userItem">{this.props.user.item1.name+" "+this.props.user.item1.SurName}</h1>
          <h1 className="userItem">{this.props.user.item1.email}</h1>
        </div>
        <div>
          <h1 className="userItem">Department: {" "+this.props.user.item1.department}</h1>
          <h1 className="userItem">Language:{" "+this.props.user.item1.Language}</h1>
          <h1 className="userItem">Phone: {" "+this.props.user.item1.phoneNumber}</h1>
          <h1 className="userItem">TimeZone:{" "+this.props.user.item1.TimeZone}</h1>
          <h1 className="userItem">Client: {" "+this.props.user.item1.client}</h1>
          <h1 className="userItem">Unit System:{" "+this.props.user.item1.UnitSystem}</h1>
          {/* <h1>{this.props.user.item1.}</h1> */}
        </div>
      </div>
    );
  }
}

export default GroupList;
