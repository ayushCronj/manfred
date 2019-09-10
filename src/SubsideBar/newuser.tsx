import * as React from "react";
import { Redirect } from "react-router-dom";
import{connect} from 'react-redux'
import {createUser} from '../redux/actions/userAction'
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
  password: string;
}

interface IProps{
  createUser:any
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

class NewUser extends React.Component<IProps, IState> {
  state = {
    email: "",
    password: ""
  };

  public render(): React.ReactNode {
    return (
    <div className="mainUser">
        <div className="Usercontainer">
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: "",
              isloggedIn: false,
              login: false,
              redirect: false
            }}
            onSubmit={(values: IState, actions: FormikActions<IState>) => {
              actions.setSubmitting(false);
              this.props.createUser(values) 
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
                        placeholder="TimeZone"
                      />
                    </div>
                  )}
                />
                 <Field
                  name="UnitSystem"
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Unit System"
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
                        placeholder="Phone Number"
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
        createUser:values=>dispatch(createUser(values))
    }
}

export default connect(null,mapDispatchToProps)(NewUser);

