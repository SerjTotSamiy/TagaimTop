import React from "react";
import styles from "./CommonError.module.sass";

export default function ({error}) {
    return (
        <div className={styles.error__container}>
            <div className={styles.error__container_circle}>
                <p>i</p>
            </div>
            <p>{error}</p>
        </div>
    );
}