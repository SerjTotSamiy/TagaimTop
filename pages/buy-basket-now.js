import React from "react";
import styles from "../styles/BuyInstagramLikes.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import { Layer } from "../component/Layer/Layer";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const BuyBasketNow = () => {
  const router = useRouter();
  return (
    <Layer firstPage={false}>
      <Head>
        <title>Tagiamtop | Terms of Service</title>

        <meta name="url" property="og:url" content="https://likes.io/buy-basket-now" />
        <meta name="title" property="og:title" content="Checkout - Tag I am Top" />
        <meta name="twitter:title" content="Checkout - Tag I am Top" />
        <meta
          name="description"
          property="og:description"
          content="Please select the packages of our platform and try us today"
        />
        <meta
          name="twitter:description"
          content="Please select the packages of our platform and try us today"
        />

        <link rel="canonical" href="https://likes.io/buy-basket-now" />
      </Head>
      <div className={styles.header_banner_full}>
        <div className={`container ${styles.header_banner_inst}`}>
          <img src="/buybasketfull.svg" />
          <p className={styles.header_title_full}>Basket</p>
          <div
            style={{
              background: "url('/basketbg.png') no-repeat 100%",
              width: 130,
              height: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginTop: 35 }}>
              <img src="/basketheart.svg" />
              <p style={{ fontWeight: "600px", fontSize: 18 }}>100</p>
            </div>
          </div>
          <ButtonComponent
            text="Buy Now"
            type="fill"
            onClick={() => router.push("buy-instagram-likes")}
          />
          <p className={styles.header_text_full}>
            By pershing you agree with{" "}
            <Link href="/terms">
              <a style={{ textDecoration: "underline" }}> rules</a>
            </Link>
          </p>
        </div>
      </div>
    </Layer>
  );
};

export default BuyBasketNow;
