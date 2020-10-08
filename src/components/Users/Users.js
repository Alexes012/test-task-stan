import React from "react";
import styles from "./Users.module.css";
import user from "../../images/user.png";
import ModalWindow from "../ModalWindow/ModalWindow";
import User from "./User/User";
import {EditClientReduxForm} from "./FormUpdateUser/FormUpdateUser";

const Users = (props) => {

    const onSubmitEdit = (param) => {
        props.editClientHandler(param);
    };
debugger
    return (
        <div className={styles.wrapper}>
            {props.isAuth ?
                <div className={styles.buttonAdd}>
                    <button onClick={() => props.openAddModal() }>Добавить клиента</button>
                </div> : <></>}
            {props.clients.map(cl => <User user={cl} key={cl.id} onShow={props.onShow}
                                           deleteClientHandler={props.deleteClientHandler}
                                           isAuth={props.isAuth}
            />)}

          <ModalWindow width={"800px"} show={props.show} closeModal={props.onShow}>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={user} alt=""/>
                    </div>
                    {props.currentClient && !props.editMode &&
                        <div className={styles.wrapperForCard}>
                            <div>Имя: {props.currentClient.name}</div>
                            <div>Фамилия: {props.currentClient.surname}</div>
                            <div>Возраст: {props.currentClient.age}</div>
                            <div>Телефон: {props.currentClient.phone}</div>
                            <div className={styles.button}>
                                <button onClick={props.setEditMode}>редактировать</button>
                            </div>
                        </div> }
                    {props.currentClient && props.editMode && <div>
                            <EditClientReduxForm onSubmit={onSubmitEdit} initialValues={props.currentClient}/>
                        </div>}
                </div>
            </ModalWindow>
        </div>
    );
};
export default Users;

