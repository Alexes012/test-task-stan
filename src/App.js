import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Cookies from "js-cookie";
import {logOut, setIsAuth} from "./redux/auth-reducer";
import UsersContainer from "./components/Users/UsersContainer";

class App extends React.Component {

    componentDidMount() {
        const token = Cookies.get('token');
        if (token) {
            this.props.setIsAuth(true);
        }
    }
    render() {

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header isAuth={this.props.isAuth} logOut={this.props.logOut}/>
                    <div className='app-wrapper-content'>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>);
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(withRouter, connect(mapStateToProps, {setIsAuth, logOut}))(App);
