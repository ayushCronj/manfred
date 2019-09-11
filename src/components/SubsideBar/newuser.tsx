import * as React from "react";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import "./subsidebar.scss";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";

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
  } else if (value.length! === 10) {
    error = "Phone Number must be of 10 digit";
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
              this.props.createUser(values);
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
