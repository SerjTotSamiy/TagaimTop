import React from "react";
import styles from "./Footer.module.sass";

import {useRouter} from "next/router";

export const Footer = () => {
    const router = useRouter();
    const date = new Date();
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img
                    src="/arrow-ap.svg"
                    alt=""
                    className={styles.app}
                    onClick={() => window.scrollTo(0, 0)}
                />
                <div className={styles.logo}>
                    <img src="/logo_white.svg" alt="Buy Instagram Followers with Tagiamtop"/>
                    <span>{date.getFullYear()} Tagiamtop.com © All Rights Reserved</span>
                </div>

                <img src="/logo_white.svg" alt="" className={styles.logo_mobile}/>
                <span className={styles.copywriting}>{date.getFullYear()} Tagiamtop.com © All Rights Reserved</span>

                <div className={styles.info}>
          <span onClick={() => router.push("/buy-instagram-likes")}>
            Buy Instagram Likes
          </span>
                    <span onClick={() => router.push("/buy-instagram-followers")}>
            Buy Instagram Followers
          </span>
                    <span onClick={() => router.push("/buy-instagram-views")}>
            Buy Instagram Views
          </span>
                    <span onClick={() => router.push("/buy-instagram-comments")}>
            Buy Instagram Comments
          </span>
                </div>
          <div className={styles.info}>
            <span onClick={() => router.push("/contact")}>Contact</span>
            <span onClick={() => router.push("/support")}>Support</span>
            <span onClick={() => router.push("/terms")}>Terms</span>
            <span onClick={() => router.push("/privacy")}>Privacy Policy</span>
          </div>
                <div className={styles.info}>
                    <span onClick={() => router.push("/blog")}>Blog</span>
                    <span onClick={() => router.push("https://www.commercegate.com/")}>CommerceGate is our Payment Facilitator</span>
                    <span
                        onClick={() => router.push("https://www.cgbilling.com/secure")}>CommerceGate billing support</span>
                </div>
            </div>
        </div>
    );
};
