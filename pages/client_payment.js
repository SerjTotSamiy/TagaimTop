import React, { useContext, useEffect } from "react";
import { gaEvent } from "../shared/gaEvents.js";
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

  useEffect(() => {
    if (Object.keys(query).length) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ecommerce: null});

      window.dataLayer.push({
        event: "purchase",
        ecommerce: {
          transaction_id: query.id, // Передаем идентификатор заказа с админки
          affiliation: query.service, // Передаем тип купленного продукта (likes – когда купили лайки, followers – когда купили подписчиков, views – когда купили просмотры и comments – когда купили комментарии)
          value: query.paid, // Передаем сумму заказа
          currency: query?.cur,
          items: [{
            item_name: `${query.plan} ${query.system} ${query.service}`, // Передаем название товара
            item_id: query?.id, // Передаем код/ID товара
            price: query?.paid, // Передаем актуальную цену товара (разделитель десятичных знаков точка «.»)
            item_brand: "tagiamtop", // Передаем бренд товара
            item_category: `Buy ${query.system} ${query.service}`, // Передаем соответствующую категорию товаров https://take.ms/Gxpmh
            item_variant: query.plan, // Передаем информацию про тариф https://take.ms/wKYoS
            quantity: query.plan // Передеам количество купленного товара
          }]
        }
      })
    }
  }, [Object.keys(query).length]);

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
