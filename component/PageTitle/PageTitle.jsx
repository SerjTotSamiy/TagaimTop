import React from "react";
import styles from './PageTitle.module.sass';

export const PageTitle = ({title}) => {
    return (
        <div className={`container ${styles.container}`}>
            <a href="/">Home</a>
            <img src="/page_title_arrow.svg" alt=""/>
            <span>{title}</span>
        </div>
    )
}
