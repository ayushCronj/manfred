import * as React from "react";
import { Table, Row, Col, Icon, Avatar } from "antd";
interface IState {}

interface IProps {
  members: any;
}

const columns = [
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
    title: "Department",
    dataIndex: "department",
    key: "department"
  },
  {
    title: "Phone",
    dataIndex: "phoneNumber",
    key: "phoneNumber"
  }
];

class Single extends React.Component<IProps, IState> {
  state = {};
  public render(): React.ReactNode {
    return (
      <div>
        <div>
          <Table
            className="userTable"
            dataSource={this.props.members}
            scroll={{ x: 200 }}
            columns={columns}
            pagination={{ hideOnSinglePage: true }}
          />
          
        </div>
      </div>
    );
  }
}

export default Single;
