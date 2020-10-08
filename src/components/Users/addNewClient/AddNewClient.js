import React from "react";
import styles from "./AddNewClient.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../helpComponents/formsControls/FormsControls";
import ModalWindow from "../../ModalWindow/ModalWindow";

const AddNewClient = (props) => {

    return (
        <ModalWindow width={"800px"} show={props.show} closeModal={props.onShow}>
            <div className={styles.wrapper}>

                <form className={styles.wrapperForEditMod} onSubmit={props.handleSubmit}>
                    <Field type="text" component={Input} name={"name"} placeholder="Имя"/>
                    <Field type="text" component={Input} name={"surname"} placeholder="Фамилия"/>
                    <Field type="text" component={Input} name={"age"} placeholder="Возраст"/>
                    <Field type="text" component={Input} name={"phone"} placeholder="Телефон"/>
                    <div className={styles.button}>
                        <button>Добавить</button>
                    </div>
                </form>
            </div>
        </ModalWindow>
    );
};

export const AddClientReduxForm = reduxForm({form: "addUsers"})(AddNewClient);
