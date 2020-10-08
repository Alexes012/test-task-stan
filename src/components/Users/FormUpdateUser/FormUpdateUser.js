import styles from "./FormUpdateUser.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../../helpComponents/formsControls/FormsControls";

const FormForUser = (props) => {

    return (


            <div className={styles.containerForAll}>
                <form className={styles.wrapperForEditMod} onSubmit={props.handleSubmit}>
                    <Field className={styles.field} type="text" component={Input} name={"name"}/>
                    <Field className={styles.field} type="text" component={Input} name={"surname"}/>
                    <Field className={styles.field} type="text" component={Input} name={"age"}/>
                    <Field className={styles.field} type="text" component={Input} name={"phone"}/>
                    <div className={styles.button}>
                        <button>Сохранить</button>
                    </div>
                </form>
            </div>


    );
};

export const EditClientReduxForm = reduxForm({form: "editUser"})(FormForUser);

