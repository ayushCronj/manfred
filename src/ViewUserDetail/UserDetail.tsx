import * as React from 'react';
import './ViewUserDetail.scss'
import {Icon} from 'antd'
import{connect} from 'react-redux'
import {addUser,deleteUser,EditUser} from '../redux/actions/userAction'

interface IProps {
    name?: string;
    address?:  string;
    key?:any;
    link?:string;
    user:any;
    index:number;
    deleteUser:any;
}

interface IState {
    data: any
}

class UserDetail extends React.Component<IProps, IState>{
    state={
        data: null
    }
    componentWillReceiveProps(){
        this.setState({
           data:this.props 
        })
    }
render(){
    console.log("props--->",this.props)
    console.log("state==> " , this.state.data)
    return(
       <div>
          <div>
          <Icon type="delete" onClick={()=>this.props.deleteUser(this.props.index) }/> 
           <p className="user-name">{this.props.user.name}{this.props.user.name}</p> 
           <p className="email">{this.props.user.email}</p>  
          </div>
          <hr/>
          <div className="profile-detail">
          <div className="profile-img">
              <img src={this.props.user.link}/>
              </div> 
              <div className="user-detail">
                  <div className='detail'>
                  <div className="title">Title</div>  
                  <div className="title-value">{this.props.user.title}</div>   
                  </div>
                  <div className='detail'>
                  <div className="title">Name</div>  
                  <div className="title-value">{this.props.user.name}</div>   
                  </div>
                  <div className='detail'>
                  <div className="title">SurName</div>  
                  <div className="title-value">{this.props.user.surname}</div>   
                  </div>
                  <div className='detail'>
                  <div className="title">Email</div>  
                  <div className="title-value">{this.props.user.email}</div>   
                  </div>
                  </div>   
          </div>
          <hr/>
        
        <div>
         <span>
         <Icon type="contacts" />  
         </span>
         <span>Company&Contact</span>
         <p>Describes additional contact Information for user Account.The PhoneNumber is used optionally and exculsively for push notification </p>
         <div className="client">
        <div className="client-title">Client:</div>
        <div className="client-title-value">{this.props.user.client}</div>
         </div>
         <div className="department">
        <div className="department-title">Department:</div>
        <div className="department-title-value">{this.props.user.department}</div>
         </div>
         <div className="phoneNumber">
        <div className="phoneNumber-title">PhoneNumber:</div>
        <div className="phoneNumber-title-value">{this.props.user.phoneNumber}</div>
         </div>
         </div> 
         <hr/>
         <div>
         <span>
         <Icon type="contacts" />  
         </span>
         <span>Language&Religion</span>
         <p>Describes additional contact Information for user Account.The PhoneNumber is used optionally and exculsively for push notification </p>
         <div className="system">
        <div className="system-title">Language:</div>
        <div className="system-title-value">{this.props.user.Language}</div>
         </div>
         <div className="system">
        <div className="system-title">TimeZone:</div>
        <div className="system-title-value">{this.props.user.TimeZone}</div>
         </div>
         <div className="system">
        <div className="system-title">UnitSystem:</div>
        <div className="system-title-value">{this.props.user.UnitSystem}</div>
         </div>

         </div> 
        </div>
        
    )
}

}

function mapDispatchToProps(dispatch){
    return{
        deleteUser:index=>dispatch(deleteUser(index))
    }
}

export default connect(null,mapDispatchToProps)(UserDetail);