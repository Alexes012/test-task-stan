import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


class Header extends React.Component {
    logoutHandler = () => {
        this.props.logOut();
    };

    render() {
        return (
            <header className={classes.header}>
                <div className={classes.loginBlock}>
                    <div className={classes.item}>
                        <NavLink to="/users" activeClassName={classes.active}>Клиенты</NavLink>
                    </div>
                    {this.props.isAuth
                        ? <button className={classes.loginOrOut} onClick={this.logoutHandler}>Выйти</button>
                        : <NavLink to={'/login'}>
                            <div className={classes.loginOrOut}>
                                <span>Авторизоваться</span>
                            </div>
                        </NavLink>}
                </div>
            </header>
        );
    }
};


export default (Header);