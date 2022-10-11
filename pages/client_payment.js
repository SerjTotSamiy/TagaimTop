import React, { useContext, useEffect } from "react";
import {gaEvent} from "../shared/gaEvents.js";
import styles from "../styles/BuyInstagramLikes.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import { Layer } from "../component/Layer/Layer";
import { useRouter } from "next/router";
import purchaseStyles from "../styles/Purchase.module.sass";
import { MeContext } from "./_app";

const Client_payment = () => {
  const { allInfo } = useContext(MeContext);
  const router = useRouter();
  const { query } = useRouter();

  useEffect(async () => {
    const currency = allInfo.cur;
    gaEvent.successful();

    console.log('currency', currency);

    window.dataLayer = window.dataLayer || [];
    currency &&
      query.price &&
      window.dataLayer.push({
        event: "payment_succesful",
        event_label: "successful",
        amount: `${query.price}`,
        currency: `${currency}`,
      });
    console.log("window.dataLayer is", window.dataLayer);
  }, [allInfo, query]);

  return (
    <Layer firstPage={false}>
      <div
        className={styles.header_banner_full}
        style={{
          background: "url('/errorbg.jpg') no-repeat 100%",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`container ${styles.header_banner_inst}`}
          style={{ maxWidth: 1000 }}
        >
          <p className={purchaseStyles.purchaseSuccessTitle}>
            THANKS <span style={{ color: "green" }}>FOR PURCHASE</span>
          </p>
          <p className={purchaseStyles.purchaseSuccessText}>
            We will fulfilling your order according to its description.
            <br />
            If there will be any problems, we will e-mail you.
          </p>

          <ButtonComponent
            text="Home page"
            type="fill"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </Layer>
  );
};

export default Client_payment;
