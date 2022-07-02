import React, {useState} from "react";
import {useRouter} from "next/router";
import {Layer} from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import homeStyles from "../styles/Home.module.sass";
import supportStyles from "../styles/Support.module.sass";

import Questions from "../component/Questions/Questions";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Head from "next/head";
import {billingQuestions, generalQuestions} from "../questions/Questions";

const Support = () => {
    const [button, setButton] = useState({
        genKnowledge: true,
        account: false,
        billing: false,
    });

    const router = useRouter();
    return (
        <Layer firstPage={false}>
            <Head>
                <title>Customer Support - Tag I am Top</title>

                <meta name="url" property="og:url" content="https://tagiamtop.com"/>
                <meta
                    name="title"
                    property="og:title"
                    content="Customer Support - Tag I am Top"
                />
                <meta name="twitter:title" content="Customer Support - Tag I am Top"/>
                <meta
                    name="description"
                    property="og:description"
                    content="Customer Support of platform - Tag I am Top."
                />
                <meta
                    name="twitter:description"
                    content="Customer Support of platform - Tag I am Top."
                />

                <link rel="canonical" href="https://likes.io/support"/>
            </Head>
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Frequently Asked Questions</p>
                <p className={styles.header_text}>
                    Have a different question about how TagIamTop works or the pricing
                    plans available? Get in touch with one of our specialists.
                </p>

                <img className={styles.header_arrow} src="/Arrow-detail.svg" alt=""/>
            </div>

            <PageTitle title={"Frequently Asked Questions"}/>

            <div className={supportStyles.supportBlock}>
                <div className={supportStyles.supportActions}>
                    <p
                        style={{
                            border: button.genKnowledge ? 0 : "2px dashed #C9C2FD",
                            backgroundColor: button.genKnowledge ? "#8C66FA" : "transparent",
                            color: button.genKnowledge ? "white" : "black",
                        }}
                        className={supportStyles.actionP}
                        onClick={() => {
                            setButton({genKnowledge: true, account: false, billing: false});
                        }}
                    >
                        <img
                            src={
                                button.genKnowledge
                                    ? "generalknowledgefocus.svg"
                                    : "generalknowledge.svg"
                            }
                            alt=""
                        />
                        <p>General Knowledge</p>
                    </p>

                    <p
                        style={{
                            border: button.billing ? 0 : "2px dashed #C9C2FD",
                            backgroundColor: button.billing ? "#8C66FA" : "transparent",
                            color: button.billing ? "white" : "black",
                        }}
                        className={supportStyles.actionP}
                        onClick={() => {
                            setButton({genKnowledge: false, account: false, billing: true});
                        }}
                    >
                        <img
                            src={button.billing ? "billingfocus.svg" : "billing.svg"}
                            alt=""
                        />
                        <p>In General</p>
                    </p>
                </div>

                {button.genKnowledge ? (
                    <Questions
                        questions={generalQuestions}
                        title={false}
                        bg="#E4E0FE54"
                    />
                ) : (
                    <Questions
                        questions={billingQuestions}
                        title={false}
                        bg="#E4E0FE54"
                    />
                )}
            </div>
        </Layer>
    );
};

export default Support;
