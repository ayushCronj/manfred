import { Table, Avatar} from 'antd';
import * as React from 'react';
import UserDetail from '../ViewUserDetail/UserDetail';



interface IState {
userDetail:any
}

const dataSource = [
  {
    key: '1',
    title:'Mr.',
    name: 'Petr',
    surname:'petr',
    email:'peter@gmail.com',
    link:'/user.png',
    client:'foreway',
    department:'sytemAdministrator',
    phoneNumber:'1234567890',
    Language:'English',
    TimeZone:'UTC',
    UnitSystem:'Metric'


  },
  {
    key: '2',
    title:'Mr',
    name: 'John',
    surname:'petr',
    email:'john@gmail.com',
    link:'/user.png',
    client:'foreway',
    department:'sytemAdministrator',
    phoneNumber:'1234567890',
    Language:'English',
    TimeZone:'UTC',
    UnitSystem:'Metric'
  },
];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'SurName',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
   title:'Email' ,
   dataIndex: 'email',
   key: 'email',
  },
  {
    title:'profilepic',
    dataIndex:'link',
    key: 'link',
    render:link=><Avatar src={link}/>
  },
  {
    title:'Client' ,
    dataIndex: 'client',
    key: 'client',
   },
   {
    title:'Department' ,
    dataIndex: 'department',
    key: 'department',
   }
];
  
export class SubSideBar extends React.Component<{},IState>{
   public componentDidMount():void{
    dataSource.map((item,index)=>{
      if(index===0){
        this.setState({
          userDetail:item
        })
      }

    })
  }
 
 private handleUser=(value)=>{
  dataSource.map((item,index)=>{
   if (value===index){
   this.setState({
    userDetail:item
  })
   }
  })
}

render(){
    return (
        
      <div>
       <Table dataSource={dataSource} columns={columns} 
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {this.handleUser(rowIndex)}, 
          };
        }}
       /> 
    {this.state!==null?
      <UserDetail user={this.state.userDetail}/>:''}
       
      </div>
 
    )
    }
    }
    export default SubSideBar;