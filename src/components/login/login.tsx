import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Formik, FormikActions, FormikProps, Form, Field, FieldProps } from 'formik';
import * as yup from 'yup';
import routes from '../../routes/routes'
import './login.scss';
// import { Button, Form, Icon, Input } from 'antd';

interface IState {
  email: string;
  password: string;
  rememberMe: string;
  }
  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

    class  Login extends React.Component<{}, IState>{ 
    public render(): React.ReactNode {
    return (
      <div className="logincontainer">
        <Formik
          initialValues={{ email: '' ,password: '',rememberMe:''}}
          onSubmit={(values: IState, actions: FormikActions<IState>) => {
              console.log({ values, actions });
                localStorage.setItem("user",values.email);
                localStorage.setItem("pass",values.password);
                localStorage.setItem("isLoggedIn", values.rememberMe);
                return <Redirect to="/test" />
                actions.setSubmitting(false)
           }}
           
          render={(formikBag: FormikProps<IState>) => (
            <Form className="login-form">
              <h3 className="h3">Login</h3>
              <Field
                name="email"
                validate={validateEmail}
                render={({ field, form }: FieldProps<IState>) => (
                  <div>
                    <input type="text"  className="field" {...field} placeholder="Email" />
                    {form.touched.email &&
                      form.errors.email &&
                      form.errors.email}
                  </div>
                )}
              />
                <Field
                name="password"
                render={({ field, form }: FieldProps<IState>) => (
                  <div>
                    <input type="password" className="field" {...field} placeholder="Password" />
                    {form.touched.password &&
                      form.errors.password &&
                      form.errors.password}
                  </div>
                )}
              />
              <Field
                      name="rememberMe"
                      type="checkbox"
                      className={
                        "check" 
                      }
                    />
                    <h4 className="h4">Remember me</h4>
               <button type="submit" className="submit">
                  Submit
              </button>
            </Form>
          )}
        />
      </div>
    );
  };
}

  export default Login;