import * as React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/userAction";
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
  name: string;
  surname: string;
  client: string;
  email: string;
  department: string;
  TimeZone: string;
  phoneNumber: string;
}

interface IProps {
  createUser: any;
  HandleSubmit:any
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

function validatePhone(value: string) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

class NewUser extends React.Component<IProps, IState> {
  state = {
    name: "",
    surname: "",
    client: "",
    email: "",
    department: "",
    TimeZone: "",
    phoneNumber: ""
  };

  public render(): React.ReactNode {
    return (
      <div className="mainUser">
        <div className="Usercontainer">
          <Formik
            initialValues={{
              name: "",
              surname: "",
              client: "",
              email: "",
              department: "",
              TimeZone: "",
              phoneNumber: ""
            }}
            onSubmit={(values: IState, actions: FormikActions<IState>) => {
              actions.setSubmitting(false);
              this.props.HandleSubmit()
              this.props.createUser(values);
            }}
            render={(formikBag: FormikProps<IState>) => (
              <Form className="user-form">
                <h3 className="heading">Create New User</h3>
                <h3 className="formItem">Contact Information</h3>
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
                  validate={validateEmail}
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Email"
                      />
                      {form.touched.email &&
                        form.errors.email &&
                        form.errors.email}
                    </div>
                  )}
                />
                <Field
                  name="phoneNumber"
                  validate={validatePhone}
                  render={({ field, form }: FieldProps<IState>) => (
                    <div>
                      <input
                        type="text"
                        className="field"
                        {...field}
                        placeholder="Phone Number"
                      />
                      {form.touched.phoneNumber &&
                        form.errors.phoneNumber &&
                        form.errors.phoneNumber}
                    </div>
                  )}
                />
                <hr className="hr" />
                <h3 className="formItem">Company & Contact</h3>
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
                <hr className="hr" />
                <h3 className="formItem"> Language & Religion</h3>
                <Field
                  name="Language"
                  component="select"
                  className="select"
                  placeholder="Language"
                >
                  <option value="English">English</option>
                  <option value="German">German</option>
                  <option value="Russian">Russian</option>
                </Field>
                <Field
                  name="TimeZone"
                  component="select"
                  className="select"
                  placeholder="Language"
                >
                  <option value="English">UTC</option>
                </Field>
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

function mapDispatchToProps(dispatch) {
  return {
    createUser: values => dispatch(createUser(values))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NewUser);
