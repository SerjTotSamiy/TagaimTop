import React, { useContext, useEffect } from "react";
import {gaEvent} from "../shared/gaEvents.js";
import styles from "../styles/BuyInstagramLikes.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import { Layer } from "../component/Layer/Layer";
import { useRouter } from "next/router";
import purchaseStyles from "../styles/Purchase.module.sass";
import { MeContext } from "./_app";

const Fail_pay = () => {
  const { allInfo } = useContext(MeContext);
  const router = useRouter();
  const { query } = useRouter();

  useEffect(async () => {
    const currency = allInfo.cur;
    gaEvent.failed()
    // window.dataLayer = window.dataLayer || [];
    // currency &&
    //   query.price &&
    //   window.dataLayer.push({
    //     event: "payment_failed",
    //     amount: `${query.price}`,
    //     currency: `${currency}`,
    //   });
    // console.log('window.dataLayer is', window.dataLayer);
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
        <div className={`container ${styles.header_banner_inst}`}>
          <p className={purchaseStyles.purchaseErrorTitle}>
            PAYMENT <span style={{ color: "red" }}>ERROR</span>
          </p>
          <p className={purchaseStyles.purchaseErrorText}>
            For now, we have not received your payment. But it may come to our
            account with time. Please check your email address for a letter
            saying whether we have received your payment. After this, your order
            will be realized according to its description. If not - please,
            write to our support. Thank you for staying with us!
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

export default Fail_pay;
