
import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import axios from 'axios';

class LoginForm extends React.PureComponent {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }


    renderInput = ({ input, label, meta }) => {
        // eslint-disable-next-line no-console
        // console.log(meta);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    // Отправка при успешном заполнении формы и клике по кнопке
    onSubmit = async (formValues) => {
        // console.log('onSubmit', formValues);
        // console.log('this.props', this.props);
        const { onFormSubmited } = this.props;
        onFormSubmited(formValues);
        // const serialObj = JSON.stringify(formValues);
        // localStorage.setItem('localStorageLogin', serialObj);
    }

    render() {
        // console.log('this.props', this.props);
        // const { isLoginLoading } = this.props;
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="email" component={this.renderInput} label="Enter e-mail" />
                <Field name="password" component={this.renderInput} label="Enter Password" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}


// /Проверка полей формы
const validate = (formValues) => {
    const errors = {};
    // if (!formValues.username) {
    //     errors.username = 'Enter the username pls';
    // }

    if (!formValues.email) {
        errors.email = 'Enter the email pls';
    }

    if (!formValues.password) {
        errors.password = 'Enter the password pls';
    }
    return errors;
};


export default reduxForm(
    {
        form: 'login',
        validate,
    },

)(LoginForm);
