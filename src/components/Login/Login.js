import React from "react";
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../helpComponents/formsControls/FormsControls";
import styles from "../../helpComponents/formsControls/FormsControls.module.css";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    };

    if (props.isAuth) {
        return <Redirect to={"/users"}/>;
    }

    return (
        <div className={classes.formAuth}>
            <h2>Авторизация</h2>
            <LoginReduxForm onSubmit={onSubmit} {...props}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form className={classes.loginform} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Почта"} component={Input} name={"login"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} component={Input} name={"password"} type={"password"}
                       validate={[required]}/>
            </div>
            {props.error && <div className={styles.formSumError}>{props.error}</div>}
            <div className={classes.buttonWrapper}>
                <button>Авторизоваться</button>
            </div>
            <div className={styles.error}>
                <span>{props.errorMessage}</span>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.error
});

export default connect(mapStateToProps, {login})(Login);

