import React from "react";
import {connect} from "react-redux";
import {
    addNewClientCard,
    deleteUser,
    editClientUser,
    getCurrentUser,
    requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import {AddClientReduxForm} from "./addNewClient/AddNewClient";

class UsersContainer extends React.Component {

    state = {
        show: false,
        editMode: false,
        showAddClient: false,
    };
    closeModalAddClient = () => {
        this.setState({showAddClient: false})
    };
    openAddModal = () => {
        this.setState({showAddClient: true})
    };
     showHandler = (id) => {
      this.props.getCurrentUser(id);
      this.setState({show: !this.state.show});
    };

    componentDidMount() {
        this.props.requestUsers();
    };

    deleteClientHandler = (id) => {
        this.props.deleteUser(id);
    };
    editClientHandler = (param) => {
        this.props.editClientUser(param.name, param.surname, param.age, param.phone);
        this.setState({show: !this.state.show});
        this.setState({editMode: false});
    };
    activatedEditMode = () => {
        this.setState({editMode: true});
    };

    onSubmit = (param) => {
        this.addClientHandler(param);
    };

    addClientHandler = (param) => {
        this.props.addNewClientCard(param.name, param.surname, param.age, param.phone);
        this.setState({showAddClient: false})
    };

    render() {


        return <>
            <Users
                clients={this.props.clients}
                show={this.state.show}
                showAddUserHandler={this.showAddUserHandler}
                editMode={this.state.editMode}
                setEditMode={this.activatedEditMode}
                onShow={this.showHandler}
                currentClient={this.props.currentClient}
                deleteClientHandler={this.deleteClientHandler}
                editClientHandler={this.editClientHandler}
                isAuth={this.props.isAuth}
                openAddModal={this.openAddModal}
            />;
            <AddClientReduxForm
                onSubmit={this.onSubmit}
                show={this.state.showAddClient}
                onShow={this.closeModalAddClient}
            />
        </>;
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        clients: state.usersPage.clients,
        currentClient: state.usersPage.currentClient,
    };
};

export default connect(mapStateToProps, {requestUsers, getCurrentUser, deleteUser, editClientUser, addNewClientCard})(UsersContainer);