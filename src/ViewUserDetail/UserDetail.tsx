import * as React from 'react';
import './ViewUserDetail.scss'

import {Icon} from 'antd'

interface IProps {
    name?: string;
    address?:  string;
    key?:any;
    link?:string;
    user:any;

}

export class UserDetail extends React.Component<IProps, {}>{


render(){
    console.log("props--->",this.props)
    return(
       <div>
          <div>
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
         <div className="client">
        <div className="client-title">PhoneNumber:</div>
        <div className="client">{this.props.user.phoneNumber}</div>
         </div>

         </div> 
         <hr/>
         <div>
         <span>
         <Icon type="contacts" />  
         </span>
         <span>Language&Religion</span>
         <p>Describes additional contact Information for user Account.The PhoneNumber is used optionally and exculsively for push notification </p>
         <p>
        <span>Language:</span>
        <span>{this.props.user.Language}</span>
         </p>
         <p>
        <span>TimeZone:</span>
        <span>{this.props.user.TimeZone}</span>
         </p>
         <p>
        <span>UnitSystem:</span>
        <span>{this.props.user.UnitSystem}</span>
         </p>

         </div> 
        </div>
        
    )
}

}
export default UserDetail;