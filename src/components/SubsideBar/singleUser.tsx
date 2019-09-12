import * as React from "react";
import { Table, Row, Col, Icon, Avatar } from "antd";
interface IState {}

interface IProps {
  members: any;
}

const columns = [
  {
    title: "Name",
    dataIndex: "item1.name",
    key: "name"
  },

  {
    title: "Email",
    dataIndex: "item1.email",
    key: "email"
  },
  {
    title: "Department",
    dataIndex:"item1.department",
    key: "department"
  },
  {
    title: "Phone",
    dataIndex:"item1.phoneNumber",
    key: "phoneNumber"
  }
];


class Single extends React.Component<IProps, IState> {
  state = {};
  public render(): React.ReactNode {
    // let member = this.props.members.map((item ,index )=> {
    //   return <GroupList user={item} />;
    // });
    return (
      <div>
        <div>
              {/* {member} */}
                <Table
            className="userTable"
              dataSource={this.props.members}
              scroll={{ x: 200 }}
              columns={columns}
              pagination={{ hideOnSinglePage: true }}
              // onRow={(record, rowIndex) => {
              //   return {
              //     onClick: event => {
              //       this.handleUser(rowIndex);
              //     }
              //   };
              // }}
            />
        </div>
      </div>
    );
  }
}

export default Single;
