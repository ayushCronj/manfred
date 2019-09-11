import * as React from "react";
import { EditUser } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import languages from '../../utils/language.json'
import TimeZone from '../../utils/timezone.json'
import { Translation } from "react-i18next";
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
  email: string;
  name: string;
  surname: string;
  client: string;
  department: string;
  Language: string;
  TimeZone: string;
  UnitSystem: string;
  phoneNumber: string;
}
interface IProps {
  userEditDetail: any;
  editindex: number;
  EditUser?: any;
  handleCancel:any;
}

class EditUserDetail extends React.Component<IProps, IState> {
  state = {
    email: "",
    name: "",
    surname: "",
    client: "",
    department: "",
    Language: "",
    TimeZone: "",
    UnitSystem: "",
    phoneNumber: ""
  };
  handleCloseModal=()=>{
    this.props.handleCancel()
  }
  onkeyDown=(keyEvent)=>{
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) { keyEvent.preventDefault(); }

  }

  public render(): React.ReactNode {
    return (
      <div className="mainUser">
        <div className="Usercontainer1">
          <Formik
            enableReinitialize={true}
            initialValues={{
              email: this.props.userEditDetail.email,
              surname: this.props.userEditDetail.surname,
              name: this.props.userEditDetail.name,
              client: this.props.userEditDetail.client,
              department: this.props.userEditDetail.department,
              Language: this.props.userEditDetail.Language,
              TimeZone: this.props.userEditDetail.TimeZone,
              UnitSystem: this.props.userEditDetail.UnitSystem,
              phoneNumber: this.props.userEditDetail.phoneNumber
            }}
            onSubmit={(values: IState, actions: FormikActions<IState>) => {
              actions.setSubmitting(false);
              this.props.EditUser(values, this.props.editindex);
            }}
            render={(formikBag: FormikProps<IState>) => (
              <Form className="user-form1" onKeyDown={this.onkeyDown}>
                <h3 className="heading"><Translation>{t => t("edituser")}</Translation></h3>
                <h3 className="formItem"><Translation>{t => t("contactinfo")}</Translation></h3>
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
               
                 <h3 className="formItem"><Translation>{t => t("company")}</Translation></h3>
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
              
                <h3 className="formItem"> <Translation>{t => t("language&religion")}</Translation></h3>
                <Field
                  name="Language"
                  component="select"
                  className="select"
                  placeholder="Language"
                >
                 <option value="">Select Language</option>
                 {languages.map(language => <option value={language.name}>{language.name}</option>)}
                </Field>
                <Field
                  name="TimeZone"
                  component="select"
                  className="select"
                  placeholder="Language"
                >
                   <option value="">Select Timezone</option>
                   {TimeZone.map(timeZone => <option value={timeZone.abbr}>{timeZone.abbr}</option>)}         
                </Field>

               
                <button type="submit" className="submit"  onClick={this.handleCloseModal}>
                <Translation>{t => t("submit")}</Translation>
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
    EditUser: (values, index) => dispatch(EditUser(values, index))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EditUserDetail);
