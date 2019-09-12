import React from "react";
import { Modal, Icon } from "antd";
import EditUserDetail from "./SubsideBar/EditUserDetail";
import { validate } from "@babel/types";

interface IState {
  visible: boolean;
}
interface IProps {
  userEditDetail: any;
  editindex: number;
  EditUser?: any;
 
}

class EditModal extends React.Component<IProps, IState> {
  state = {
    visible: false
  };

 private showModal = () => {
    this.setState({
      visible: true
    });
  };

 public handleCancel = e => {
    this.setState({
      visible: false
    });

}

  render() {
    return (
      <div>
        <Icon type="edit" className="iconContainer" onClick={this.showModal} />
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null} 
        
        >
         
         <EditUserDetail userEditDetail={this.props.userEditDetail} editindex={this.props.editindex} handleCancel={this.handleCancel}/>
          </Modal>
           </div>
       )
   }

}
export default EditModal;
