import * as React from "react";
import { Redirect } from "react-router-dom";
import {addUser,deleteUser,EditUser} from '../redux/actions/userAction'
import{connect} from 'react-redux'
import "./subsidebar.scss";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";
import * as yup from "yup";

interface IState {
  email: string;
  name:string
  surname:string;
  client:string;
  department:string;
  Language:string;
  TimeZone:string;
  UnitSystem:string;
  phoneNumber:string;
}

interface IProps{
    userEditDetail:any,
    editindex:number,
    EditUser?:any,
}

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

class EditUserDetail extends React.Component<IProps, IState> {
  state = {
    email: "",
    name:"",
    surname:"",
    client:"",
    department:"",
    Language:"",
    TimeZone:"",
    UnitSystem:"",
    phoneNumber:"",  
  };

  public render(): React.ReactNode {
    return (
    <div className="mainUser">
        <div className="Usercontainer1">
          <Formik
            initialValues={{
              email:this.props.userEditDetail.email,
              surname:this.props.userEditDetail.surname,
              name:this.props.userEditDetail.name,
              client:this.props.userEditDetail.client,
              department:this.props.userEditDetail.department,
              Language:this.props.userEditDetail.Language,
              TimeZone:this.props.userEditDetail.TimeZone,
              UnitSystem:this.props.userEditDetail.UnitSystem,
              phoneNumber:this.props.userEditDetail.phoneNumber            
            }}
            onSubmit={(values: IState, actions: FormikActions<IState>) => {
              actions.setSubmitting(false);
              this.props.EditUser(values,this.props.editindex) 
              console.log(values);
            }}
            render={(formikBag: FormikProps<IState>) => (
              <Form className="user-form">
                <h3 className="heading">Create New User</h3>
                <Field
                  name="name"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="First Name"
                      
                      />
                      {form.touched.email &&
                        form.errors.email &&
                        form.errors.email}
                    </div>
                  )}
                />
                <Field
                  name="surname"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Last Name"
                      />
                    </div>
                  )}
                />
                <Field
                  name="email"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Email"
                      />
                    </div>
                  )}
                />
                <Field
                  name="client"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Client"
                    
                      />
                    </div>
                  )}
                />
                 <Field
                  name="department"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Department"
                      />
                    </div>
                  )}
                />
                 <Field
                  name="Language"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Language"
                      />
                    </div>
                  )}
                />
                 <Field
                  name="TimeZone"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="UTC"
                      />
                    </div>
                  )}
                />
                 
                 <Field
                  name="phoneNumber"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="phoneNumber"
                      />
                    </div>
                  )}
                />
                <button type="submit" className="submit">
                  Submit
                </button>
              </Form>
            )}
          />
        </div>
     </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
        EditUser:(values,index)=>dispatch(EditUser(values,index))
    }
}

export default connect (null,mapDispatchToProps)(EditUserDetail);
