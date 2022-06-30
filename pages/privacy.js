import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Layer } from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import styles1 from "../styles/Home.module.sass";
import TextComponent from "../component/TextComponent";
import privacyStyles from "../styles/PrivacyPolicy.module.sass";
import { PageTitle } from "../component/PageTitle/PageTitle";
import Head from "next/head";

const Privacy = () => {
    const router = useRouter();
    return (
        <Layer firstPage={false}>
            <Head>
                <title>TagIamTop | Privacy Policy</title>

                <meta
                    name="title"
                    property="og:title"
                    content="Privacy Policy - Tag I am Top"
                />
                <meta name="twitter:title" content="Privacy Policy - Tag I am Top" />
                <meta
                    name="description"
                    property="og:description"
                    content="By reading this document you submit an agreement."
                />
                <meta
                    name="twitter:description"
                    content="By reading this document you submit an agreement."
                />

                <link rel="canonical" href="https://likes.io/terms" />
            </Head>
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Privacy Policy</p>
                <p className={styles.header_text}>Last Updated : June 27, 2022</p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt="" />
            </div>

            <PageTitle title={"Privacy Policy"} />

            <div className={privacyStyles.privacy_container}>
                {/*<div className={privacyStyles.terms_block}>
                    <p className={styles1.info_text}>
                        By reading this document you submit an agreement between <Link href="/">
                        <a target="_blank">https://tagiamtop.com/</a></Link> further called tagiamtop or We and you
                        (further called Customer) on the rules and conditions listed in this Privacy Policy.
                        If you have some doubts whether to agree with any statement or word written in this text,
                        please, leave this website and do not make any purchase on it.
                        <br />
                        This document was developed to enclose the main principles of the user’s data use by tagiamtop.com.
                    </p>
                </div>*/}
                <TextComponent
                    title="1. Main operations with the Customer’s personal information that are held by tagiamtop"
                    text={
                        <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                            Likeware collects personal information from the Customer to make the process of purchase
                            convenient and simple. We do not provide third parties with the information indicated
                            on the website{" "}<Link href="/"><a target="_blank">https://tagiamtop.com/</a></Link>{" "}
                            by the Customer including email and contact information listed in the order
                            the Customer places on the website.
                            <br />
                            The website collects the following data from the Customer:
                            <li>Email address for notifications and account access</li>
                            <li>Personal information to submit an order on the website</li>
                            <li>Payment data that is necessary to provide payments for purchased services from tagiamtop</li>
                            <li>Cookies and user data collected by Google Analytics services</li>
                        </p>
                    }
                />

                <TextComponent
                    title="2. Main principles Tagiamtop adheres to when operating with the Customer’s data"
                    text={
                        <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                            <li>We provide notifications mailing to the Customer’s email indicated when
                                registering on the website or submitting an order.</li>
                            <li>We collect personal information to tailor our services to the Customer’s needs.</li>
                            <li>We provide anonymity and confidentiality to any user who makes an order/purchase on the website.</li>
                            <li>
                                We strictly protect all the data that is required for the account
                                access of the Customer. These data are not available to third parties
                                in any case.
                            </li>
                            <li>
                                We provide protection for the Customer’s payment data at the highest level.
                                In case of any problem occurring with the Customer’s payment card data or information,
                                Tagiamtop is obliged to immediately inform the Customer via the website’s pages or via
                                email about the problem to prevent money leakage.
                            </li>
                            <li>We collect user’s data for specified purposes listed below.</li>
                        </p>
                    }
                />
                <TextComponent
                    title="3. What purposes do We follow by collecting personal data and user information?"
                    text={
                        <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                            <li>
                                To collect the Customer’s information for further promotions
                                and notifications about the services and products Tagiamtop offers.
                            </li>
                            <li>To detect and prevent potentially violated and illegal activities of the website’s users.</li>
                            <li>
                                To analyze and evaluate the services that Tagiamtop
                                offers including the website’s statistics and analytics
                                provided by Google Analytics services.
                            </li>
                        </p>
                    }
                />
                <TextComponent
                    title="4. Google Analytics’ use of the Customer’s data"
                    text={
                        <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                            Our website uses Google Analytics services provided by Google,
                            Inc. These services use a special type of user’s data – so-called
                            ‘cookies’ that are text-format pieces of data located on the Customer’s
                            computer for further analyses on how the Customer uses the website.
                            This information is saved and stored on the servers of Google, Inc.
                            These data are not associated with any other data used by Google.
                            <br />
                            You can customize cookies or refuse to provide them to Google Analytics using the following link:
                            {" "}<Link href="https://tools.google.com/dlpage/gaoptout?hl=en-GB"><a target="_blank">
                                https://tools.google.com/dlpage/gaoptout?hl=en-GB</a></Link>
                        </p>
                    }
                />

                <TextComponent
                    title="5. Technologies that we use for the Customer’s data protection"
                    text={
                        <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                            Tagiamtop guarantees the safety and confidentiality
                            of the personal data of the Customer by implementing
                            double encryption technology on the website.
                            The website uses SSL encryption that ensures the confidentiality
                            of your information in the transmission of data. In no case,
                            we do collect store, or transfer data from your card.
                            The payment operations are carried out entirely through
                            the secure server of our payment gateways. Qloyd OU will
                            not sell, purchase, provide, exchange or in any other manner
                            disclose Account or Transaction data, or personal information
                            of or about a Cardholder to anyone, except, it’s Acquirer,
                            Card networks/associations or in response to valid government demands.
                        </p>
                    }
                />

                <TextComponent
                    title="6. Do you have any questions about this Privacy Policy document?"
                    text={
                        <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                            Tagiamtop  will be glad to answer them. Please, provide
                            us with feedback via email:
                            {" "}<Link href="mailto:contact@tagiamtop.com">contact@tagiamtop.com</Link>
                        </p>
                    }
                />
            </div>
        </Layer>
    );
};

export default Privacy;
