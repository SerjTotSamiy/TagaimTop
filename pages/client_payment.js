import React, {useContext, useEffect} from "react";
import styles from "../styles/BuyInstagramLikes.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import { Layer } from "../component/Layer/Layer";
import { useRouter } from "next/router";
import purchaseStyles from "../styles/Purchase.module.sass";
import {MeContext} from "./_app";

const Client_payment = () => {
  const {allInfo} = useContext(MeContext);
  const router = useRouter();
  const {query} = useRouter();

  useEffect(async () => {
    const currency = allInfo.cur;
    currency && query.price && Object.keys(dataLayer).length &&
    dataLayer.push({
        event: 'payment',
        'event_label': 'succesful',
        'amount': `${query.price}`,
        'currency': `${currency}`
    });
  }, [allInfo, query])

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
            THANKS <p style={{ color: "green" }}>FOR PURCHASE</p>
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