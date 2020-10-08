import styles from "./User.module.css";
import user from "../../../images/user.png";
import React from "react";

const User = (props) => {
    return (
        <div id={props.user.id}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper2}>
                    <div className={styles.image}>
                        <img src={user}/>
                    </div>
                    <div className={styles.container}>
                        <div>Имя: {props.user.name}</div>
                        <div>Фамилия: {props.user.surname}</div>
                        <div>Возраст: {props.user.age}</div>
                        <div>Телефон:{props.user.phone}</div>
                    </div>
                    { (props.isAuth) ?
                    <div className={styles.button}>
                        <button onClick={() => props.onShow(props.user.id)}>открыть</button>
                        <button onClick={() => props.deleteClientHandler(props.user.id)}>удалить</button>
                    </div>:<></> }
                </div>
            </div>
        </div>
    )
};

export default User;

